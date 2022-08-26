import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const sliderApi = createApi({
    reducerPath: 'sliderApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://62050517161670001741b335.mockapi.io/test/slider',
    }),
    endpoints: (build) => ({
        getSlider: build.query({
            query: () => '',
        }),
    }),
})
export const { useGetSliderQuery } = sliderApi;