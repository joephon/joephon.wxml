import store from '../common/store'
import dispatch from '../utils/dispatch'
import getStorage from '../utils/getStorage'
import showLoading from '../utils/showLoading'
import { loading } from '../common/strings'
import { thoughts } from '../common/apis'
import { ON_HOME_LOAD_START, ON_HOME_LOAD_SUCCESS, ON_HOME_LOAD_FAILURE } from '../common/constants'

export default () => {
    const token = getStorage('token')
    dispatch(ON_HOME_LOAD_START)
    showLoading(loading)
    wx.request({
      url: `${thoughts}?token=${token}`,
      data: {},
      method: 'GET',
      success,
      fail,
    })
}

function success(res) {
    if (res.data.code === 200) {
        wx.hideLoading()
        dispatch(ON_HOME_LOAD_SUCCESS, res.data.data)
    } else {
        wx.hideLoading()
        dispatch(ON_HOME_LOAD_FAILURE, res.data.data)
    }
}

function fail(res) {
    wx.hideLoading()
    dispatch(ON_HOME_LOAD_FAILURE, res)
}