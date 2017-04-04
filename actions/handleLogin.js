import store from '../common/store'
import { host, session } from '../common/apis'
import setStorage from '../utils/setStorage'
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
      success: res => getUserSuccess(res, code),
      fail: res => getUserFail(res)
    })
}

function getUserSuccess(res, code) {
    store.dispatch({ type: ON_LOGIN_SUCCESS, payload: { code, iv: res.iv, encryptedData: res.encryptedData } })
    getToken()
}

function getUserFail(res) {
    store.dispatch({ type: ON_LOGIN_FAILURE, payload: res })
}

function getToken() {
    store.dispatch({ type: ON_SESSION_START })
    const { iv, code, encryptedData } = store.getState().login
    wx.request({
      url: `${session}`,
      data: { iv, code, encryptedData },
      method: 'GET', 
      success: res => getTokenSuccess(res),
      fail: res => getTokenFail(res)
    })
}

function getTokenSuccess(res) {
    setStorage('token', res.data.token)
    wx.reLaunch({
      url: '/pages/home/home',
    })
}

function getTokenFail(res) {
    console.log(res)
}