import store from '../common/store'
import { session } from '../common/apis'
import setStorage from '../utils/setStorage'
import showLoading from '../utils/showLoading'
import dispatch from '../utils/dispatch'
import { loading } from '../common/strings'
import { 
    ON_LOGIN_START, 
    ON_LOGIN_SUCCESS, 
    ON_LOGIN_FAILURE, 
    ON_SESSION_START, 
    ON_SESSION_SUCCESS, 
    ON_SESSION_FAILURE 
} from '../common/constants'

export default () => {
    dispatch(ON_LOGIN_START)
    showLoading(loading)
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
    dispatch(ON_LOGIN_FAILURE, res)
    wx.hideLoading()
}

function getUserInfo(code) {
    wx.getUserInfo({
      success: res => getUserSuccess(res, code),
      fail: res => getUserFail(res)
    })
}

function getUserSuccess(res, code) {
    dispatch(ON_LOGIN_SUCCESS, { code, iv: res.iv, encryptedData: res.encryptedData })
    getToken()
}

function getUserFail(res) {
    dispatch(ON_LOGIN_FAILURE, res)
    wx.hideLoading()
}

function getToken() {
    dispatch(ON_SESSION_START)
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
    setStorage('wxInfo', res.data.wxInfo)
    dispatch(ON_SESSION_SUCCESS, { wxInfo: res.wxInfo })
    wx.hideLoading()
    wx.reLaunch({
      url: '/pages/home/home',
    })
}

function getTokenFail(res) {
    dispatch(ON_SESSION_FAILURE)
    wx.hideLoading()
}