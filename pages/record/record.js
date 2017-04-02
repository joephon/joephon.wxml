import { introduction, joephon } from '../../strings'
import { joephonAvatar } from '../../uris'

const { dispatch, store, subscribe } = getApp()

Page({
  data:{
    static: {
      introduction,
      joephonAvatar,
      joephon,
    }
  },
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