import { 
    ON_HOME_LOAD_START, 
    ON_HOME_LOAD_FAILURE, 
    ON_HOME_LOAD_SUCCESS, 
    ON_HOME_PLAY_VOICE,
    ON_HOME_STOP_VOICE,
    ON_HOME_HIDE,
} from '../common/constants'

const home = {
        loading: false,
        thoughts: [],
        count: 0,
        error: '',
        playing: false,
        which: null,
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
        case ON_HOME_PLAY_VOICE:
            return Object.assign({}, state, { playing: true, which: action.payload })
        case ON_HOME_STOP_VOICE:
            return Object.assign({}, state, { playing: false, which: 'no' })
        case ON_HOME_HIDE:
            return Object.assign({}, state, home)
        default:
            return state
    }
}