export default (title, image) => {
    wx.showToast({
        title: title,
        mask: true,
        image: image,
    })
}