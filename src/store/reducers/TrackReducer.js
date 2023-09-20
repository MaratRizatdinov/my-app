import {
    SET_CURRENT_TRACK,
    STOP_TRACK,
    PLAY_TRACK,
    SET_PLAYLIST,
    TOGGLE_LOOP,
    TOGGLE_SHUFFLE,
    EXIT_FROM_TRACKS_PAGE,
} from '../actions/types/types'

const initialState = {
    isPlaying: false,
    currentTrack: null,
    playlist: [],
    isShuffleMode: false,
    shufflePlayList: [],
    isLoop: false,
}

export function TrackReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_TRACK: {
            return { ...state, isPlaying: true, currentTrack: action.track }
        }

        case SET_PLAYLIST: {
            return { ...state, playlist: action.playlist }
        }

        case STOP_TRACK: {
            return { ...state, isPlaying: false }
        }

        case PLAY_TRACK: {
            return { ...state, isPlaying: true }
        }
        case TOGGLE_LOOP: {
            return { ...state, isLoop: !state.isLoop }
        }
        case TOGGLE_SHUFFLE: {
            return {
                ...state,
                isShuffleMode: !state.isShuffleMode,
                shufflePlayList: action.shuffleList,
            }
        }
        case EXIT_FROM_TRACKS_PAGE: {
            return {
                ...state,
                isPlaying: false,
                currentTrack: null,
                isShuffleMode: false,
                shufflePlayList: [],
                isLoop: false,
            }
        }

        default:
            return state
    }
}
