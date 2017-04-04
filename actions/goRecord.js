import store from '../common/store'

export default e => {
    store.dispatch({type: 'ON_LOAD'})
}