import { configureStore } from "@reduxjs/toolkit";
import covidSlice from './covidSlice'
const store = configureStore({
    reducer: {
        covid: covidSlice,
    },
});



export default store;