import { 
    ON_HOME_LOAD_START, 
    ON_HOME_LOAD_FAILURE, 
    ON_HOME_LOAD_SUCCESS, 
} from '../common/constants'

const home = {
        loading: false,
        thoughts: [],
        count: 0,
        error: ''
      }

export default (state = home, action) => {
    switch(action.type) {
        case ON_HOME_LOAD_START:
            return Object.assign({}, state, { loading: true })
        case ON_HOME_LOAD_SUCCESS:
            const { thoughts, count } = action.payload
            return Object.assign({}, state, { loading: false, thoughts, count, })
        case ON_HOME_LOAD_FAILURE:
            return Object.assign({}, state, { loading: false, error: action.payload })
        default:
            return state
    }
}