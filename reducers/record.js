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
     ON_RECORD_PLAY_COUNT,
     ON_RECORD_PLAY,
     ON_RECORD_PAUSE,
     ON_RECORD_FINISH,
     SWITCH_RECORD_SHOW,
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
        time: 0,
        progress: 0,
        show: true,
        play: false,
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
        case ON_RECORD_PLAY:
            return Object.assign({}, state, { play: true })
        case ON_RECORD_PLAY_COUNT:
            let progress = ((formatRecord.time + 2) / formatRecord.rawDuration ) * 100
            if(progress > 100) progress = 100
            return Object.assign({}, state, { time: formatRecord.time += 1, progress  })
        case ON_RECORD_PAUSE:
            return Object.assign({}, state, { play: false })
        case ON_RECORD_FINISH:
            return Object.assign({}, state, { time: 0, progress: 0, play: false })
        case SWITCH_RECORD_SHOW:
            return Object.assign({}, state, { show: !formatRecord.show})
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