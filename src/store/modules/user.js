export default {
   state: {
      currentUser: {
         login: "false",
         email: "",
      },
   },

   getters: {
      getCurrentUser(state) {
         console.log("getCurrentUser is fired in services");
         console.log(state.currentUser);
         return state.currentUser
      },
   },
   
   mutations: {
      setCurrentUser(state, data) {
         console.log("setCurrentUser is fired in services");
         state.currentUser = data;
      },
   },

   actions: {

   },
}