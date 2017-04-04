export default () => {
    try {
        const token = wx.getStorageSync('token')
        if(token) return 
        else {
          wx.reLaunch({
            url: '/pages/login/login',
            success: function(res){
              // success
            },
            fail: function(res) {
              // fail
            },
            complete: function(res) {
              // complete
            }
          })
        }
    } catch(e) {
        console.log(e)
    }
}