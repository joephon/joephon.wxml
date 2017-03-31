import { ON_LOAD, ON_FAILURE, ON_SUCCESS, loading, failure, success } from '../constants'
import { introduction, joephon } from '../strings'
import { joephonAvatar } from '../uris'

const home = {
    status: 'Nothing Happend!',
    introduction,
    joephonAvatar,
    joephon,
    homeList: [1,2,3,4,5,6,7,8,9],
    duration: 3598,
}

export default (state = home, action) => {
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