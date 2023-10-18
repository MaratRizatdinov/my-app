import { MODIFIED_PLAYLIST } from '../types/types'

export function setModifiedPlaylist(modifiedPlaylist) {
    return {
        type: MODIFIED_PLAYLIST,
        modifiedPlaylist: modifiedPlaylist,
    }
}
