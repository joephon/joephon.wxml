import getRecords from '../../actions/getRecords'

const { store, subscribe } = getApp()

Page({
  data: {
    common: '',
    home: store.getState().home
  }, 
  
  onShow() {
    this.unsubscribe = subscribe(() => this.setData(store.getState().home))
    getRecords()
  }
})
