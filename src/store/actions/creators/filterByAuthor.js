import { FILTER_BY_AUTHOR } from '../types/types'

export function setFilterByAuthor(filterAuthors) {
    return {
        type: FILTER_BY_AUTHOR,
        filterAuthors: filterAuthors,
    }
}
