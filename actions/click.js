import store from '../store'

export default e => {
    console.log(e)
    store.dispatch({type: 'ON_LOAD'})
}