import { introduction, joephon, freeToView, submitRecord } from '../../common/strings'
import { joephonAvatar } from '../../common/uris'
import handleRecord from '../../actions/handleRecord'
import switchRecordShow from '../../actions/switchRecordShow'
import playPauseRecord from '../../actions/playPauseRecord'
import recordRadioChange from '../../actions/recordRadioChange'
import handleRecordSubmit from '../../actions/handleRecordSubmit'

const { dispatch, store, subscribe } = getApp()

Page({
  data:{
    common: {
      introduction,
      joephonAvatar,
      joephon,
      freeToView,
      submitRecord,
    },
    record: store.getState().record
  },

  handleRecord,

  switchRecordShow,

  playPauseRecord,

  recordRadioChange,

  handleRecordSubmit,

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
  onUnload(){
    this.unsubscribe()
  }
})