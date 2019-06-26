import Vue from 'vue'
import Vuex from 'vuex'
import appService from '../app.service'
import postsModule from './posts.js'

Vue.use(Vuex)

const state = {
  isAuthenticated: false
}

const store = new Vuex.Store({
  modules: {
    postsModule
  },
  state,
  getters: {
    isAuthenticated: (state) => {
      return state.isAuthenticated
    }
  },
  actions: {
    logout (context) {
      context.commit('logout')
    },
    login (context, credantials) {
      return new Promise(resolve => {
        appService.login(credantials)
          .then(data => {
            context.commit('login', data)
            resolve()
          })
          .catch(() => {
            return window.alert('Could not login')
          })
      })
    }
  },
  mutations: {
    logout (state) {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('token', null)
        window.localStorage.setItem('tokenExpiration', null)
      }
      state.isAuthenticated = false
    },
    login (state, data) {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('token', data.token)
        window.localStorage.setItem('tokenExpiration', data.expiration)
      }
      state.isAuthenticated = true
    }
  }
})

if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function (event) {
    let expiration = window.localStorage.getItem('tokenExpiration')
    const unixTimestamp = new Date().getTime() / 1000
    if (expiration !== null && parseInt(expiration) - unixTimestamp > 0) {
      store.state.isAuthenticated = true
    }
  })
}

export default store
