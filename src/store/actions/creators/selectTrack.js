import { SELECT_TRACK } from '../types/types'

export function selectTrack(track) {
    return {
        type: SELECT_TRACK,
        track: track,
    }
}
