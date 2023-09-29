import {
    SET_CURRENT_TRACK,
    STOP_TRACK,
    PLAY_TRACK,
    SET_PLAYLIST,
    TOGGLE_LOOP,
    TOGGLE_SHUFFLE,
    EXIT_FROM_TRACKS_PAGE,
    TOGGLE_LOADING_MODE,
    FETCH_FAVORITES_STARTED,
    FETCH_FAVORITES_SUCCESS,
    FETCH_FAVORITES_FAILURE,
    FETCH_ACCESS_TOKEN,
    FETCH_REFRESH_TOKEN,
} from '../actions/types/types'

import { workArray } from '../../workarray'

const initialState = {
    isPlaying: false,
    currentTrack: null,
    playlist: workArray(),
    isShuffleMode: false,
    shufflePlayList: [],
    isLoop: false,
    loadingMode: true,
    loading: false,
    error: null,
    favoritePlaylist: [],
    accessToken: null,
    refreshToken: null,
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
        case TOGGLE_LOADING_MODE: {
            return { ...state, loadingMode: false }
        }
        case FETCH_FAVORITES_STARTED: {
            return { ...state, loading: true }
        }
        case FETCH_FAVORITES_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: null,
                favoritePlaylist: action.favoriteTracks,
            }
        }
        case FETCH_FAVORITES_FAILURE: {
            return { ...state, loading: false, error: action.payload.error }
        }

        case FETCH_ACCESS_TOKEN: {
            return { ...state, accessToken: action.accessToken }
        }
        case FETCH_REFRESH_TOKEN: {
            return { ...state, refreshToken: action.refreshToken }
        }

        default:
            return state
    }
}
