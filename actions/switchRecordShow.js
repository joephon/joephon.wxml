import store from '../common/store'
import { ON_RECORD_SWITCH_SHOW } from '../common/constants'

export default e => {
    store.dispatch({ type: ON_RECORD_SWITCH_SHOW })
}