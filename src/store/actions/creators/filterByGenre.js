import { FILTER_BY_GENRE } from '../types/types'

export function setFilterByGenre(filterGenre) {
    return {
        type: FILTER_BY_GENRE,
        filterGenre: filterGenre,
    }
}
