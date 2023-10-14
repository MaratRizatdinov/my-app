import { MODIFIED_PLAYLIST } from '../types/types'

export function modifiedPlaylist(modifiedPlaylist) {
    return {
        type: MODIFIED_PLAYLIST,
        modifiedPlaylist: modifiedPlaylist,
    }
}
