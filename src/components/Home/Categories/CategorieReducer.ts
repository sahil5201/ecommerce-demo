'use client';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper'

export const categorieApi = createApi({
    reducerPath: 'categorieApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath]
        }
    },
    endpoints: (builder) => ({
        getCategories: builder.query<any, any>({
            query: () => `products/categories`,
        }),
    }),
})

export const { useGetCategoriesQuery } = categorieApi