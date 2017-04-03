import store from '../store'
import { ON_RECORD_PLAY, ON_RECORD_PAUSE, ON_RECORD_FINISH } from '../constants'

export default e => {
    const play = store.getState().record.play

    if(play) {
        store.dispatch({ type: ON_RECORD_PAUSE })
    } else {
        store.dispatch({ type: ON_RECORD_PLAY })
    }
    
}