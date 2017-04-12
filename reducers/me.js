import { ON_ME_LOAD, ON_ME_HIDE, ON_SUCCESS } from '../common/constants'
const me = {
    
}

export default (state = me, action) => {
    switch(action.type) {
        case ON_ME_LOAD:
            return Object.assign({}, state, { userInfo: action.payload })
        case ON_ME_HIDE:
            return Object.assign({}, state, { })
        case ON_SUCCESS:
            return Object.assign({}, state, { })
        default:
            return state
    }
}