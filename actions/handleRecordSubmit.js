import store from '../store'
import { ON_RECORD_SUBMIT } from '../constants'

export default e => {
    store.dispatch({ type: ON_RECORD_SUBMIT})
}