import store from '../store'
import { ON_RECORD_START, ON_RECORD_ERROR, ON_RECORD_STOP, ON_RECORD_SUCCESS, ON_RECORD_COUNT } from '../constants'
import { recordStart, recordStop } from '../strings'
import { voiceIcon } from '../uris'
import showToast from '../utils/showToast'

export default e => {
    const onRecord = store.getState().record.onRecord

    if(onRecord) return stop()

    start()

    setTimeout(() => stop(), 360000)
}

function stop() {
    wx.stopRecord()

    store.dispatch({ type: ON_RECORD_STOP })

    showToast(recordStop, voiceIcon)
}

function start() {
    store.dispatch({ type: ON_RECORD_START })

    showToast(recordStart, voiceIcon)

    count()

    wx.startRecord({
      success,
      fail,
    })
}

function success(res) {
    store.dispatch({ type: ON_RECORD_SUCCESS, payload: res.tempFilePath })    
}

function fail(res) {
    wx.stopRecord()
    store.dispatch({ type: ON_RECORD_ERROR , payload: res })    
}


function count() {
    setTimeout(() => {
        store.dispatch({ type: ON_RECORD_COUNT}) 

        if(store.getState().record.onRecord) count()       
    }, 1000)
}