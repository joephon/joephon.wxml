import { ON_LOAD, ON_FAILURE, ON_SUCCESS } from '../common/constants'
const me = {

}

export default (state = me, action) => {
    switch(action.type) {
        case ON_LOAD:
            return Object.assign({}, state, { })
        case ON_SUCCESS:
            return Object.assign({}, state, { })
        case ON_FAILURE:
            return Object.assign({}, state, { })
        default:
            return state
    }
}