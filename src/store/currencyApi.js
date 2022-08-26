import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const currencyApi = createApi({
    reducerPath: 'currencyApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://cdn.cur.su/api/latest.json',
    }),
    endpoints: (build) => ({
        getCurrency: build.query({
            query: () => '',
        }),
    }),
})

export const { useGetCurrencyQuery } = currencyApi;