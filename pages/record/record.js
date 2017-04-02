import { introduction, joephon } from '../../strings'
import { joephonAvatar } from '../../uris'
import startRecord from '../../actions/startRecord'

const { dispatch, store, subscribe } = getApp()

Page({
  data:{
    common: {
      introduction,
      joephonAvatar,
      joephon,
    },
    record: store.getState().record
  },

  startRecord,

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
    // 页面关闭
  }
})