import getRecords from '../../actions/getRecords'
import playVoice from '../../actions/playVoice'
import dispatch from '../../utils/dispatch'
import { ON_HOME_HIDE } from '../../common/constants'

const { store, subscribe } = getApp()

Page({
  data: {
    common: '',
    home: store.getState().home
  }, 

  playVoice, 
  
  onShow() {
    this.unsubscribe = subscribe(() => this.setData(store.getState().home))
    getRecords()
  },

  onHide() {
    dispatch(ON_HOME_HIDE)
    wx.stopVoice()
  }
})
