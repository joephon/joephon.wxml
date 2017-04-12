import { ON_HOME_PLAY_VOICE, ON_HOME_STOP_VOICE } from '../common/constants'
import dispatch from '../utils/dispatch'
import store from '../common/store'

export default e => {
    const { source, which, rawDuration } = e.target.dataset
    stopPlay()
    downloadFile(source, which, rawDuration)
}

function downloadFile(source, which, rawDuration) {
    wx.downloadFile({
      url: source,
      type: 'audio',
      success: res => playSource(res, which, rawDuration),
      fail: res => console.log(res),
    })
}

function playSource(res, which, rawDuration) {
    dispatch(ON_HOME_PLAY_VOICE, which)
    wx.playVoice({
      filePath: res.tempFilePath,
      success: res => console.log(res), 
      fail: res => console.log(res)
    })
    setTimeout(() => stopPlay(), rawDuration * 1000)
}

function stopPlay() {
  wx.stopVoice()
  dispatch(ON_HOME_STOP_VOICE)
}