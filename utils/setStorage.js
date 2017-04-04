export default (key, value) => {
    try {
        wx.setStorageSync(key, value)
    } catch(e) {
        console.log(e)
    }
}