import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default new Vuex.Store({
  state: {
    items: []
  },
  getters: {
    getItems: s => s.items
  },
  mutations: {
    updItems: (s, playload) => {
      s.items = playload;
    },
    addItem: (s, item) => {
      s.items.push(item);
    },
    removeItem: (s, idx) => {
      s.items.splice(idx, 1);
    }
  },
  actions: {
    loadItems: (s, playload) => {
      axios.get('https://jsonplaceholder.typicode.com/users', {
        responseType: 'json'
      })
        .then((res)=>{
          s.commit('updItems', res.data);
        })
        .catch((e)=>console.error(e));
    },
    addItem: (s, item) => {
      s.commit('addItem', item);
    },
    removeItem: (s, idx) => {
      s.commit('removeItem', idx)
    }
  }
})
