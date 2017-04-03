import store from '../store'
import { ON_RECORD_RADIO_CHANGE } from '../constants'

export default e => {
    store.dispatch({ type: ON_RECORD_RADIO_CHANGE, payload: e.detail.value })
}