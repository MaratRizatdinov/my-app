import {
    SET_CURRENT_TRACK,
    STOP_TRACK,
    PLAY_TRACK,
    SET_PLAYLIST,
    TOGGLE_LOOP,
    TOGGLE_SHUFFLE,
    EXIT_FROM_TRACKS_PAGE,
    TOGGLE_LOADING_MODE,
    FETCH_ACCESS_TOKEN,
    FETCH_REFRESH_TOKEN,
    CHANGE_MODE_NAME,
    FILTER_BY_AUTHOR,
    FILTER_BY_GENRE,
    FILTER_BY_YEAR,
    FILTER_BY_SUBSTRING,
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
    accessToken: null,
    refreshToken: null,
    modeName: 'Main',
    filterAuthors: [],
    filterGenre: [],
    filterYear: 'По умолчанию',
    filterSubstring: '',
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

        case FETCH_ACCESS_TOKEN: {
            return { ...state, accessToken: action.accessToken }
        }
        case FETCH_REFRESH_TOKEN: {
            return { ...state, refreshToken: action.refreshToken }
        }
        case CHANGE_MODE_NAME: {
            return { ...state, modeName: action.mode }
        }
        case FILTER_BY_AUTHOR: {
            return { ...state, filterAuthors: action.filterAuthors }
        }
        case FILTER_BY_GENRE: {
            return { ...state, filterGenre: action.filterGenre }
        }
        case FILTER_BY_YEAR: {
            return { ...state, filterYear: action.filterYear }
        }
        case FILTER_BY_SUBSTRING: {
            return { ...state, filterSubstring: action.filterSubstring }
        }
        default:
            return state
    }
}
