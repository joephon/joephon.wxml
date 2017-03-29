const app = getApp()
    , { dispatch, store, subscribe } = app

Page({
  data: store.getState().home, 

  bindViewTap: e => dispatch({type: 'ON_LOAD'}),
  
  onLoad: function() {
    this.unsubscribe = subscribe(() => this.setData(store.getState().home))  
  },
})
