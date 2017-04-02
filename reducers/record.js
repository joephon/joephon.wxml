import {
     ON_LOAD,
     ON_FAILURE,
     ON_SUCCESS,
     ON_RECORD_START, 
     ON_RECORD_STOP, 
     ON_RECORD_ERROR,
     ON_RECORD_SUCCESS,
     loading,
     success,
     failure,
     recordReady,
     recording,
     recordSuccess, 
} from '../constants'
import { recordStartHint, recordStopHint } from '../strings'
import formatTime from '../utils/formatTime'

const record = {
        recordStartHint,
        recordStopHint,
        duration: 0,
        recordSource: '',
        onRecord: false,
      }
      , formatRecord = Object.assign({}, record, { duration: formatTime(record.duration) })
      

export default (state = formatRecord, action) => {
    switch(action.type) {
        case ON_RECORD_START:
            return Object.assign({}, state, { status: recording, onRecord: true })
        case ON_RECORD_STOP:
            return Object.assign({}, state, { status: recordReady, onRecord: false })
        case ON_RECORD_SUCCESS:
            return Object.assign({}, state, { status: recordSuccess, onRecord: false, recordSource: action.payload })
        case ON_LOAD:
            return Object.assign({}, state, { status: loading})
        case ON_SUCCESS:
            return Object.assign({}, state, { status: success})
        case ON_FAILURE:
            return Object.assign({}, state, { status: failure})
        default:
            return state
    }
}