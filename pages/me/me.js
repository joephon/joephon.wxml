import getUserInfo from '../../actions/getUserInfo'
import playVoice from '../../actions/playVoice'
import dispatch from '../../utils/dispatch'
import { ON_ME_HIDE } from '../../common/constants'

const { store, subscribe } = getApp()

Page({
  data: {
    common: 'hello',
    me: store.getState().me
  }, 

  playVoice, 
  
  onShow() {
    this.unsubscribe = subscribe(() => this.setData({
        me: store.getState().me
    }))
    getUserInfo()
    console.log(store.getState().me)
  },

  onHide() {
    dispatch(ON_ME_HIDE)
    wx.stopVoice()
  }
})
