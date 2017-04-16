import getStorage from './getStorage'
import Http from './Http'
import { thoughts } from '../common/apis'

export default res => {
    const token = wx.getStorageSync('token')
        , request = new Http(thoughts)

    if(token) {
      request.get(start, success, fail, { token })
    } else  wx.reLaunch({ url: '/pages/login/login' })
}

function success(res) {
  const code = res.data.code 
  if(code !== 200) wx.reLaunch({ url: '/pages/login/login' })
  else return
}

function start() {
  console.log('start')
}

function fail(res) {
  console.log('fail')
}