import { configureStore } from '@reduxjs/toolkit';
import {usersApi} from './usersApi';
import {quizApi} from "./quizApi";
import {currencyApi} from "./currencyApi";
import {sliderApi} from "./sliderApi";

const store = configureStore({
    reducer: {
        [usersApi.reducerPath]: usersApi.reducer,
        [quizApi.reducerPath]: quizApi.reducer,
        [currencyApi.reducerPath]: currencyApi.reducer,
        [sliderApi.reducerPath]: sliderApi.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(
        usersApi.middleware, quizApi.middleware, currencyApi.middleware, sliderApi.middleware),
})

export default store;