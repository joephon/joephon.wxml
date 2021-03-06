import { 
    ON_LOGIN_START, 
    ON_LOGIN_SUCCESS, 
    ON_LOGIN_FAILURE, 
    ON_SESSION_START, 
    ON_SESSION_SUCCESS, 
    ON_SESSION_FAILURE 
} from '../common/constants'

const login = {
    loading: false,
}

export default (state = login, action) => {
    switch(action.type) {
        case ON_LOGIN_START:
            return Object.assign({}, state, { loading: true })
        case ON_LOGIN_SUCCESS:
            const { code, iv, encryptedData } = action.payload
            return Object.assign({}, state, { code, iv, encryptedData })
        case ON_LOGIN_FAILURE:
            return Object.assign({}, state, { error: action.payload })
        case ON_SESSION_START:
            return Object.assign({}, state, { })
        case ON_SESSION_SUCCESS:
            return Object.assign({}, state, { wxInfo: action.payload.wxInfo, loading: false })
        case ON_SESSION_FAILURE:
            return Object.assign({}, state, { error: action.payload })
        default:
            return state
    }
}