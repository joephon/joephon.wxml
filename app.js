import store from './store'

const { dispatch, subscribe } = store

App({
  onLaunch() {
    
  },
  store,
  dispatch,
  subscribe,
  recordSource: ''
})