import { ON_LOAD, ON_FAILURE, ON_SUCCESS, loading, failure, success } from '../common/constants'
import formatTime from '../utils/formatTime'

const home = {
        status: 'Nothing Happend!',
        homeList: [1,1,1,1,1,1,1,1,1,1,1,1],
        duration: 3598,
      }
    , formatHome = Object.assign({}, home, { duration: formatTime(home.duration) })

export default (state = formatHome, action) => {
    

    switch(action.type) {
        case ON_LOAD:
            return Object.assign({}, state, { status: loading })
        case ON_SUCCESS:
            return Object.assign({}, state, { status: success })
        case ON_FAILURE:
            return Object.assign({}, state, { status: failure })
        default:
            return state
    }
}