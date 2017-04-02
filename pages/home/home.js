import goRecord from '../../actions/goRecord'

const { dispatch, store, subscribe } = getApp()

Page({
  data: store.getState().home, 

  goRecord,
  
  onLoad() {
    this.unsubscribe = subscribe(() => this.setData(store.getState().home))
  }
})
