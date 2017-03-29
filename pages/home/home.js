const { dispatch, store, subscribe } = getApp()

import click from '../../actions/click'

Page({
  data: store.getState().home, 

  click,
  
  onLoad() {
    this.unsubscribe = subscribe(() => this.setData(store.getState().home))  
  },
})
