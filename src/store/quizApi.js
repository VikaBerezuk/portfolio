import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const quizApi = createApi({
    reducerPath: 'quizApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://62050517161670001741b335.mockapi.io/test/quiz',
    }),
    endpoints: (build) => ({
        getQuiz: build.query({
            query: () => '',
        }),
    }),
})
export const { useGetQuizQuery } = quizApi;