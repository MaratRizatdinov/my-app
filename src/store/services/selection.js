import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const selectionApi = createApi({
    reducerPath: 'selectionApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://skypro-music-api.skyeng.tech/catalog/selection',
    }),
    endpoints: (builder) => ({
        getSelection: builder.query({
            query: () => ({
                url: `/`,
            }),
            
        }),
    }),
})

export const { useGetSelectionQuery } = selectionApi
