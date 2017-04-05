import store from '../common/store'
import { ON_RECORD_START, ON_RECORD_ERROR, ON_RECORD_STOP, ON_RECORD_SUCCESS, ON_RECORD_COUNT } from '../common/constants'
import { recordStart, recordStop } from '../common/strings'
import { voiceIcon } from '../common/uris'
import showToast from '../utils/showToast'
import dispatch from '../utils/dispatch'

export default e => {
    const onRecord = store.getState().record.onRecord

    if(onRecord) return stop()

    start()

    setTimeout(() => stop(), 360000)
}

function stop() {
    wx.stopRecord()

    dispatch(ON_RECORD_STOP)

    showToast(recordStop, voiceIcon)
}

function start() {
    dispatch(ON_RECORD_START)

    showToast(recordStart, voiceIcon)

    wx.startRecord({
      success,
      fail,
    })

    count()
}

function success(res) {
    dispatch(ON_RECORD_SUCCESS, res.tempFilePath)    
}

function fail(res) {
    wx.stopRecord()
    dispatch(ON_RECORD_ERROR, res)    
}

function count() {
    setTimeout(() => {
        dispatch(ON_RECORD_COUNT) 

        if(store.getState().record.onRecord) count()       
    }, 1000)
}