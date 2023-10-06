import { configureStore } from '@reduxjs/toolkit'
import { TrackReducer } from './reducers/TrackReducer'
import { favoriteApi } from './services/favorite'


const store = configureStore({
    reducer: {
        state: TrackReducer,
        [favoriteApi.reducerPath]: favoriteApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(favoriteApi.middleware),
})

export default store
