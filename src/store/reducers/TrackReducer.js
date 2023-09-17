import {
    SELECT_TRACK,
    STOP_TRACK,
    PLAY_TRACK,
    SET_PLAYLIST,
} from '../actions/types/types'

const initialState = {
    isPlaying: false,
    currentTrack: null,
    prevTrack: null,
    nextTrack: null,
    playlist: [],
}

export function TrackReducer(state = initialState, action) {
    switch (action.type) {
        case SELECT_TRACK: {
            return { ...state, isPlaying: true, currentTrack: action.track }
        }

        case STOP_TRACK: {
            return { ...state, isPlaying: false }
        }

        case PLAY_TRACK: {
            return { ...state, isPlaying: true }
        }

        case SET_PLAYLIST: {
            return { ...state, playlist: action.playlist }
        }

        default:
            return state
    }
}
