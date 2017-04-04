import { 
    ON_LOGIN_START, 
    ON_LOGIN_SUCCESS, 
    ON_LOGIN_FAILURE, 
    ON_SESSION_START, 
    ON_SESSION_SUCCESS, 
    ON_SESSCION_FAILURE 
} from '../common/constants'

const login = {

}

export default (state = login, action) => {
    switch(action.type) {
        case ON_LOGIN_START:
            return Object.assign({}, state, { })
        case ON_LOGIN_SUCCESS:
            const { code, iv, encryptedData } = action.payload
            return Object.assign({}, state, { code, iv, encryptedData })
        case ON_LOGIN_FAILURE:
            return Object.assign({}, state, { })
        default:
            return state
    }
}