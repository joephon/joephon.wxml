import store from './common/store'
import checkToken from './utils/checkToken'

const { dispatch, subscribe } = store

App({
  onLaunch(res) {
    checkToken(res)
  },
  store,
  dispatch,
  subscribe,
  recordSource: ''
})