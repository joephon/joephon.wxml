import { ON_LOAD, ON_FAILURE, ON_SUCCESS } from '../constants'
const home = {
    status: 'Nothing Happend!'
}

export default (state = home, action) => {
    switch(action.type) {
        case ON_LOAD:
            return Object.assign({}, state, { status: 'Loading' })
        case ON_SUCCESS:
            return Object.assign({}, state, { status: 'Loading Success' })
        case ON_FAILURE:
            return Object.assign({}, state, { status: 'Loading Failure' })
        default:
            return state
    }
}