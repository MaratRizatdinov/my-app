import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const favoriteApi = createApi({
    reducerPath: 'favoriteApi',
    tagTypes: ['FavoriteTracks'],
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
            providesTags: (result) =>
                result
                    ? [
                          ...result.map(({ id }) => ({ type: 'FavoriteTracks', id })),
                          { type: 'FavoriteTracks', id: 'LIST' },
                      ]
                    : [{ type: 'FavoriteTracks', id: 'LIST' }],
        }),
        addFavoriteTrack: builder.mutation({
            query: ({ id, accessToken }) => ({
                url: `${id}/favorite/`,
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
                method: 'POST',
            }),
            invalidatesTags:[{ type: 'FavoriteTracks', id: 'LIST' }]
        }),
        deleteFavoriteTrack: builder.mutation({
            query: ({ id, accessToken }) => ({
                url: `${id}/favorite/`,
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
                method: 'DELETE',
            }),
            invalidatesTags:[{ type: 'FavoriteTracks', id: 'LIST' }]
        }),
    }),
})

export const {
    useGetAllFavoritesQuery,
    useAddFavoriteTrackMutation,
    useDeleteFavoriteTrackMutation,
} = favoriteApi
