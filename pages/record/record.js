import { joephonAvatar } from '../../common/uris'
import handleRecord from '../../actions/handleRecord'
import switchRecordShow from '../../actions/switchRecordShow'
import playPauseRecord from '../../actions/playPauseRecord'
import recordRadioChange from '../../actions/recordRadioChange'
import handleRecordSubmit from '../../actions/handleRecordSubmit'
import { 
    introduction, 
    joephon, 
    freeToView, 
    submitRecord,     
    cheat,
    product,
    live,
    development,
    design,
    complain,  
} from '../../common/strings'

const { store, subscribe } = getApp()

Page({
  data:{
    common: {
      introduction,
      joephonAvatar,
      joephon,
      freeToView,
      submitRecord,
      categories: [
          { name: cheat, value: cheat },
          { name: complain, value: complain },
          { name: live, value: live },
          { name: product, value: product },
          { name: design, value: design },
          { name: development, value: development },
      ]
    },
    record: store.getState().record
  },

  handleRecord,

  switchRecordShow,

  playPauseRecord,

  recordRadioChange,

  handleRecordSubmit,

  onShow() {
    this.unsubscribe = subscribe(() => this.setData({
      record: store.getState().record
    }))
  },
  onReady:function(){
    // 页面渲染完成
  },
  onLoad:function(){
    // 加载显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload(){
    this.unsubscribe()
  }
})