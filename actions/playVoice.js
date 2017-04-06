import { ON_HOME_PLAY_VOICE, ON_HOME_STOP_VOICE } from '../common/constants'
import dispatch from '../utils/dispatch'
import store from '../common/store'

export default e => {
    const { playing } = store.getState().home
        , { source, which } = e.target.dataset
        
    if (playing) {
      stopPlay()
    }
    else {
      downloadFile(source, which)
    }
}

function downloadFile(source, which) {
    wx.downloadFile({
      url: source,
      type: 'audio',
      success: res => playSource(res, which),
      fail: res => console.log(res),
    })
}

function playSource(res, which) {
    wx.playVoice({
      filePath: res.tempFilePath,
      success: () => dispatch(ON_HOME_PLAY_VOICE, which),
      fail: res => console.log(res)
    })
}

function stopPlay() {
  wx.stopVoice()
  dispatch(ON_HOME_STOP_VOICE)
}