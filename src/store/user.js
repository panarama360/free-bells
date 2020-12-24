import appFirebase from "@/firebase";

const user = {
    namespaced: true,
    state: () => ({
        user: undefined,
        loadUser: true
    }),
    mutations: {
      userChange(state, user){
          state.user = user;
          state.loadUser = false;
      }
    },
    actions: {
        async created({commit}){
            appFirebase.auth().onAuthStateChanged(user => {
                commit('userChange', user);
            });
        }
    },
}

export default user;