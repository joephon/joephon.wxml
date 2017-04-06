import { login, xwm, description, joephon } from '../../common/strings'
import handleLogin from '../../actions/handleLogin'

const { store, subscribe } = getApp()

Page({
    data: {
        common: {
            login,
            xwm,
            description,
            joephon,
        },
        login: store.getState().login
    },

    handleLogin,

    onShow() {
        this.unsubscribe = subscribe(() => this.setData(store.getState().login))
    },

    onUnload() {
        this.unsubscribe()
    }
})