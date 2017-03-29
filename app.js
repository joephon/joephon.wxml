import store from './store'

const { dispatch, subscribe } = store

App({
  onLaunch() {
    console.log('hello')
  },
  store,
  dispatch,
  subscribe
})