import store from './store'

const { dispatch, subscribe } = store

App({
  onLaunch: function () {
  },
  store,
  dispatch,
  subscribe
})