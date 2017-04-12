import store from '../common/store'
import dispatch from '../utils/dispatch'
import getStorage from '../utils/getStorage'
import showLoading from '../utils/showLoading'
import { ON_ME_LOAD } from '../common/constants'

export default () => {
    const userInfo = getStorage('wxInfo')
    dispatch(ON_ME_LOAD, userInfo)
}