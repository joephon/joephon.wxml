export default key => {
    try {
        return wx.getStorageSync(key)
    } catch(e) {
        console.log(e)
    }
}