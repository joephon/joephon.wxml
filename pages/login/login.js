import { login } from '../../common/strings'
import handleLogin from '../../actions/handleLogin'

const { store, subscribe } = getApp()

Page({
    data: {
        common: {
            login,
        },
        login: store.getState().login
    },

    handleLogin,

    onLoad() {
        this.unsubscribe = subscribe(() => this.setData(store.getState().login))
    },

    onUnload() {
        this.unsubcribe()
    }
})