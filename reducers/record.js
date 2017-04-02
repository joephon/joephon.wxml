import { recordStartHint, recordStopHint } from '../strings'
import formatTime from '../utils/formatTime'
import {
     ON_LOAD,
     ON_FAILURE,
     ON_SUCCESS,
     ON_RECORD_START, 
     ON_RECORD_STOP, 
     ON_RECORD_ERROR,
     ON_RECORD_SUCCESS,
     ON_RECORD_COUNT,
     loading,
     success,
     failure,
     recordReady,
     recording,
     recordSuccess, 
} from '../constants'

const record = {
        recordStartHint,
        recordStopHint,
        rawDuration: 0,
        duration: '',
        recordSource: '',
        onRecord: false,
      }
      

export default (state = record, action) => {
    const formatRecord = Object.assign({}, state, { duration: formatTime(state.rawDuration) })

    switch(action.type) {
        case ON_RECORD_START:
            return Object.assign({}, state, { status: recording, onRecord: true, duration: '', rawDuration: 0, recordSource: '' })
        case ON_RECORD_COUNT:
            return Object.assign({}, state, { rawDuration: formatRecord.rawDuration += 1, duration: formatRecord.duration })
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