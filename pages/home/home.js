const { dispatch, store, subscribe } = getApp()

Page({
  data: store.getState().home, 

  bindViewTap: e => dispatch({type: 'ON_LOAD'}),
  
  onLoad() {
    this.unsubscribe = subscribe(() => this.setData(store.getState().home))  
  },
})
