import { configureStore } from '@reduxjs/toolkit';
import {usersApi} from './usersApi';
import {quizApi} from "./quizApi";

const store = configureStore({
    reducer: {
        [usersApi.reducerPath]: usersApi.reducer,
        [quizApi.reducerPath]: quizApi.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(usersApi.middleware, quizApi.middleware),
})

export default store;