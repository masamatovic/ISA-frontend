import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    user: {
      role: {
        authority: ""
      }
    }
  },
  mutations: {
    login(state, jwt){
       state.user = jwt;  
    },
    logout(state){
      state.user = {
        role: {
           authority: ''
           }   
       };
    }
  },
  actions: {},
  modules: {},
 
})
