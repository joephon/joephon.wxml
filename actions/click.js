import store from '../store'

export default e => {
    store.dispatch({type: 'ON_LOAD'})
}