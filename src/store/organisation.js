import appFirebase from "@/firebase";
import firebase from 'firebase'
import { collection, doc } from 'rxfire/firestore';
import {authState} from "rxfire/auth";
import {distinct, map, switchMap, toArray} from "rxjs/operators";
import {combineLatest, from} from "rxjs";

let currentSub = undefined;
const organisation = {
    namespaced: true,
    state: () => ({
        currentOrganisation: undefined,
        organisations: [],
        loadOrganisation: true
    }),
    mutations: {
        setCurrentOrganisation(state, org) {
            org.owner = org.ownerId == appFirebase.auth().currentUser.uid;
            state.currentOrganisation = org;
        },
        setOrganisations(state, orgs) {
            console.log('setOrganisations', orgs)
            state.organisations = orgs;
            state.loadOrganisation = false;
        }
    },
    actions: {
        async selectOrganisation(context, org) {
            if(currentSub) currentSub.unsubscribe();
            const mDoc = appFirebase.firestore().collection('organisations').doc(org.id)
            currentSub = doc(mDoc).subscribe(org => context.commit('setCurrentOrganisation', {id: org.id, ...org.data()}));
        },
        async loadOrganisations(context) {
            const ownOrganisations = collection(appFirebase
                .firestore()
                .collection('organisations')
                .where('ownerId', '==', appFirebase.auth().currentUser.uid))
                .pipe(map(value => value.map(value1 => ({id: value1.id, ...value1.data(), owner: true}))))
            console.log(ownOrganisations, context)
            const organisation = collection(appFirebase
                .firestore()
                .collection('organisations')
                .where(new firebase.firestore.FieldPath('users', appFirebase.auth().currentUser.email), '!=', false))
                .pipe(map(value => value.map(value1 => ({id: value1.id, ...value1.data(), owner: false}))))
            organisation.subscribe(value => console.log('value', value));
            combineLatest([ownOrganisations, organisation])
                .pipe(map(value => [...value[0], ...value[1]]))
                .pipe(switchMap(value => from(value).pipe(distinct(value => value.id), toArray())))
                .subscribe(async orgs => {
                    if (!context.state.currentOrganisation && orgs.length) await context.dispatch('selectOrganisation', orgs[0]);
                    context.commit('setOrganisations', orgs)
            })
        },
        async created(context) {
            authState(appFirebase.auth())
                .subscribe(user => {
                    if (user) {
                        context.dispatch('loadOrganisations')
                    } else {
                        context.commit('setOrganisations', []);
                    }
                })
        }
    }
}

export default organisation;