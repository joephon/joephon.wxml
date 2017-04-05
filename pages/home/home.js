const { store, subscribe } = getApp()

Page({
  data: store.getState().home, 
  
  onLoad() {
    this.unsubscribe = subscribe(() => this.setData(store.getState().home))
  }
})
