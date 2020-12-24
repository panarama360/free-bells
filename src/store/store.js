import {createStore} from 'vuex'
import organisation from "@/store/organisation";
import user from "@/store/user";

const store = createStore({
    state: {
        isLoading: false
    },
    actions: {
        async created(context){
            await context.dispatch('user/created');
            await context.dispatch('organisation/created');
        }
    },
    modules: {
        organisation,
        user
    }
})

export default store;