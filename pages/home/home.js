import click from '../../actions/click'

const { dispatch, store, subscribe } = getApp()

Page({
  data: store.getState().home, 

  click,
  
  onLoad() {
    this.unsubscribe = subscribe(() => this.setData(store.getState().home))
    let home = store.getState().home
    this.setData(Object.assign(home, {duration: formatTime(home.duration)}))
    console.log(store.getState().home.duration)  
  },
})
