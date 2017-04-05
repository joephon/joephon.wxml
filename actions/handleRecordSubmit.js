import store from '../common/store'
import { ON_RECORD_SUBMIT_START, ON_RECORD_SUBMIT_SUCCESS, ON_RECORD_SUBMIT_FAILURE } from '../common/constants'
import { loading } from '../common/strings'
import showLoading from '../utils/showLoading'
import getStorage from '../utils/getStorage'
import { thought } from '../common/apis'
import dispatch from '../utils/dispatch'

export default e => {
    store.dispatch({ type: ON_RECORD_SUBMIT_START })
    showLoading(loading)
    uploadRecord()
}

function uploadRecord() {
    const token = getStorage('token')
        , { formData } = store.getState().record
    wx.uploadFile({
      url: `${thought}?token=${token}`,
      filePath: formData.recordSource,
      formData,
      name: 'file',
      success,
      fail,
    })
}

function success(res) {
    wx.hideLoading()
    dispatch(ON_RECORD_SUBMIT_SUCCESS)
    wx.switchTab({ url: '/pages/home/home'})      
}

function fail(res) {
    wx.hideLoading()
    dispatch(ON_RECORD_SUBMIT_FAILURE, res) 
}