import { introduction, joephon, freeToView, submiteRecord } from '../../strings'
import { joephonAvatar } from '../../uris'
import handleRecord from '../../actions/handleRecord'
import switchRecordShow from '../../actions/switchRecordShow'
import playPauseRecord from '../../actions/playPauseRecord'

const { dispatch, store, subscribe } = getApp()

Page({
  data:{
    common: {
      introduction,
      joephonAvatar,
      joephon,
      freeToView,
      submiteRecord,
    },
    record: store.getState().record
  },

  handleRecord,

  switchRecordShow,

  playPauseRecord,

  onLoad() {
    this.unsubscribe = subscribe(() => this.setData({
      record: store.getState().record
    }))
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    this.unsubscribe()
  }
})