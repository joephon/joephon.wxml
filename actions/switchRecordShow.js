import store from '../common/store'
import { ON_RECORD_SWITCH_SHOW } from '../common/constants'
import dispatch from '../utils/dispatch'

export default e => {
    dispatch(ON_RECORD_SWITCH_SHOW)
}