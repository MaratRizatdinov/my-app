import { SET_CURRENT_TRACK } from '../types/types'

export function setCurrentTrack(track) {
    return {
        type: SET_CURRENT_TRACK,
        track: track,
    }
}
