import { configureStore } from '@reduxjs/toolkit'
import { TrackReducer } from './reducers/TrackReducer'
import { favoriteApi } from './services/favorite'
import { selectionApi } from './services/selection'

const store = configureStore({
    reducer: {
        state: TrackReducer,
        [favoriteApi.reducerPath]: favoriteApi.reducer,
        [selectionApi.reducerPath]: selectionApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(favoriteApi.middleware)
            .concat(selectionApi.middleware),
})

export default store
