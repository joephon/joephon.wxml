import formatTime from '../utils/formatTime'
import { recordStartHint, recordStopHint, cheat } from '../common/strings'
import {
     ON_RECORD_START, 
     ON_RECORD_STOP, 
     ON_RECORD_ERROR,
     ON_RECORD_SUCCESS,
     ON_RECORD_COUNT,
     ON_RECORD_PLAY_COUNT,
     ON_RECORD_PLAY,
     ON_RECORD_PAUSE,
     ON_RECORD_FINISH,
     ON_RECORD_SWITCH_SHOW,
     ON_RECORD_RADIO_CHANGE,
     ON_RECORD_SUBMIT_START,
     ON_RECORD_SUBMIT_SUCCESS,
     ON_RECORD_SUBMIT_FAILURE,
} from '../common/constants'

const record = {
        recordStartHint,
        recordStopHint,
        rawDuration: 0,
        time: 0,
        progress: 0,
        onRecord: false,
        show: true,
        play: false,
        duration: '0"',
        recordSource: '',
        formData: '',
        category: cheat,
        loading: false,
      }
      

export default (state = record, action) => {
    const formatRecord = Object.assign({}, state, { duration: formatTime(state.rawDuration) })

    switch(action.type) {
        case ON_RECORD_START:
            return Object.assign({}, state, { onRecord: true, duration: '', rawDuration: 0, recordSource: '' })
        case ON_RECORD_COUNT:
            return Object.assign({}, state, { rawDuration: formatRecord.rawDuration += 1, duration: formatRecord.duration })
        case ON_RECORD_STOP:
            return Object.assign({}, state, { onRecord: false })
        case ON_RECORD_SUCCESS:
            return Object.assign({}, state, { onRecord: false, recordSource: action.payload })
        case ON_RECORD_PLAY:
            return Object.assign({}, state, { play: true })
        case ON_RECORD_PLAY_COUNT:
            let progress = ((formatRecord.time + 1) / (formatRecord.rawDuration - 1)) * 100
            if(progress > 100) progress = 100
            return Object.assign({}, state, { time: formatRecord.time += 1, progress  })
        case ON_RECORD_PAUSE:
            return Object.assign({}, state, { play: false })
        case ON_RECORD_FINISH:
            return Object.assign({}, state, { time: 0, progress: 0, play: false })
        case ON_RECORD_SWITCH_SHOW:
            return Object.assign({}, state, { show: !state.show})
        case ON_RECORD_RADIO_CHANGE:
            return Object.assign({}, state, { category: action.payload})
        case ON_RECORD_SUBMIT_START:
            const { recordSource, duration, rawDuration, category, show } = formatRecord
            return Object.assign({}, state, { loading: true, formData: { recordSource, duration, rawDuration, category, show } })
        case ON_RECORD_SUBMIT_SUCCESS:
            return Object.assign({}, state, record)
        case ON_RECORD_SUBMIT_FAILURE:
            return Object.assign({}, state, { loading: false, error: action.payload })
        default:
            return state
    }
}