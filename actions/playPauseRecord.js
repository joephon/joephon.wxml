import store from '../common/store'
import dispatch from '../utils/dispatch'
import { ON_RECORD_PLAY, ON_RECORD_PAUSE, ON_RECORD_FINISH, ON_RECORD_PLAY_COUNT } from '../common/constants'

export default e => {
    const { time, rawDuration, play } = store.getState().record

    if(play) {
        pauseRecord()
    } else {
        playRecord()
    }  
}

function count() {
    const { time, rawDuration, play } = store.getState().record

    setTimeout(() => {
        dispatch(ON_RECORD_PLAY_COUNT)
        if(play && time < rawDuration -2 ) count()
    }, 1000)
}

function playRecord() {
    const { recordSource, rawDuration } = store.getState().record

    dispatch(ON_RECORD_PLAY)

    wx.playVoice({
      filePath: recordSource,
      success: function(res){
        setTimeout(() => stopRecord(), rawDuration * 1000)
      },
    })

    count()

    setTimeout(() => stopRecord(), rawDuration * 1000)
}

function pauseRecord() {

    wx.pauseVoice({
        success: function(res) {
            dispatch(ON_RECORD_PAUSE)
        }
    })
}

function stopRecord() {
    dispatch(ON_RECORD_FINISH)

    wx.stopVoice()
}