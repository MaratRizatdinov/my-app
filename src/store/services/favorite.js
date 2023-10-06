import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const favoriteApi = createApi({
    reducerPath: 'favoriteApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://skypro-music-api.skyeng.tech/catalog/track',
    }),
    endpoints: (builder) => ({
        getAllFavorites: builder.query({
            query: (accessToken) => ({
                url: '/favorite/all',
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }),
        }),
        addFavoriteTrack: builder.mutation({
            query: ({ id, accessToken }) => ({
                url: `${id}/favorite/`,
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
                method: 'POST',               
            }),
        }),
        deleteFavoriteTrack: builder.mutation({
            query: ({ id, accessToken }) => ({
                url: `${id}/favorite/`,
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
                method: 'DELETE',
            }),
        }),
    }),
})

export const {
    useGetAllFavoritesQuery,
    useAddFavoriteTrackMutation,
    useDeleteFavoriteTrackMutation,
} = favoriteApi
