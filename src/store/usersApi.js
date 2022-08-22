import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://reqres.in/api/users?per_page=4',
    }),
    endpoints: (build) => ({
        getUsers: build.query({
            query: () => 'users',
        }),
    }),
})

export const { useGetUsersQuery } = usersApi;

