import store from '../store'
import { ON_RECORD_START, ON_RECORD_ERROR, ON_RECORD_STOP, ON_RECORD_SUCCESS } from '../constants'

export default e => {
    const onRecord = store.getState().record.onRecord

    if(onRecord) {
        wx.stopRecord()
        store.dispatch({ type: ON_RECORD_STOP })
        return
    }

    store.dispatch({ type: ON_RECORD_START })

    wx.startRecord({
      success: res => {
          store.dispatch({ type: ON_RECORD_SUCCESS, payload: res.tempFilePath })
          console.log('success', res)
      },

      fail: res => {
          store.dispatch({ type: ON_RECORD_ERROR , payload: res })
      },

    })

    setTimeout(() => {
        wx.stopRecord()
        store.dispatch({ type: ON_RECORD_STOP })
    }, 359000)
}