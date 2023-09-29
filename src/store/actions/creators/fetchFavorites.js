import {
    FETCH_FAVORITES_STARTED,
    FETCH_FAVORITES_SUCCESS,
    FETCH_FAVORITES_FAILURE,
} from '../types/types'

export function fetchFavoretesStarted() {
    return {
        type: FETCH_FAVORITES_STARTED,
    }
}
export function fetchFavoretesSuccess(favoriteTracks) {
    return {
        type: FETCH_FAVORITES_SUCCESS,
        favoriteTracks:  favoriteTracks,
    }
}
export function fetchFavoretesFailure(error) {
    return {
        type: FETCH_FAVORITES_FAILURE,
        payload: { error },
    }
}
