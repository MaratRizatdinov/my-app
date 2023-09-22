import { SET_PLAYLIST } from '../types/types'

export function setPlaylist(playlist) {
    return {
        type: SET_PLAYLIST,
        playlist: playlist,
    }
}
