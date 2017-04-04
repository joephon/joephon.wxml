import store from './common/store'
import checkToken from './utils/checkToken'

const { dispatch, subscribe } = store

App({
  onLaunch() {
    checkToken()
  },
  store,
  dispatch,
  subscribe,
  recordSource: ''
})