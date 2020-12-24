import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'
const appFirebase = firebase.initializeApp({
    apiKey: 'AIzaSyCWlPXlFSPDntsf5uZPFWpZlIBQif5Yd5U',
    authDomain: 'localhost',
    projectId: 'free-bells',
    databaseURL: 'https://free-bells-default-rtdb.europe-west1.firebasedatabase.app/',
})
// appFirebase.firestore().collection('organisations')
//     .doc('')
//     .update({
//         users: firebase.firestore.FieldValue.arrayUnion("greater_virginia")
//     })
export default appFirebase;