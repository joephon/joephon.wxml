export default (title, image) => {
    wx.showToast({
        title: title,
        mask: false,
        image: image,
    })
}