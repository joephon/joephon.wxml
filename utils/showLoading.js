import { loading } from '../common/strings'

export default title => {
    wx.showLoading({
        title,
        mask: true,
    })
}