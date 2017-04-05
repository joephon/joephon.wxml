import store from '../common/store'

export default (type, payload) => {
    if (payload) return store.dispatch({ type, payload })
    else return store.dispatch({ type })
}