import store from '../store'
import { SWITCH_RECORD_SHOW } from '../constants'

export default e => {
    store.dispatch({ type: SWITCH_RECORD_SHOW})
}