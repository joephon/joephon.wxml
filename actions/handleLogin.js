import store from '../common/store'
import { salt } from '../common/keys'
import { host, session } from '../common/apis'
import { 
    ON_LOGIN_START, 
    ON_LOGIN_SUCCESS, 
    ON_LOGIN_FAILURE, 
    ON_SESSION_START, 
    ON_SESSION_SUCCESS, 
    ON_SESSCION_FAILURE 
} from '../common/constants'

export default () => {
    store.dispatch({ type: ON_LOGIN_START })
    wx.login({
      success,
      fail,
    })
}

function success(res) {
    const code = res.code
    getUserInfo(code)
}

function fail(res) {
    store.dispatch({ type: ON_LOGIN_FAILURE, payload: res })
}

function getUserInfo(code) {
    wx.getUserInfo({
      success: res => {
          store.dispatch({ type: ON_LOGIN_SUCCESS, payload: { code, iv: res.iv, encryptedData: res.encryptedData } })
      },
      fail: res => {
        store.dispatch({ type: ON_LOGIN_FAILURE, payload: res })
      }
    })
}

