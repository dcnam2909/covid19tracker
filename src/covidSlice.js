import { createSlice } from '@reduxjs/toolkit';


const covidSlice = createSlice({
    name: 'covid',
    initialState: {
        today: {
            confirmed: 0,
            recovered: 0,
            deaths: 0,
        },
        total: {
            confirmed: 0,
            recovered: 0,
            deaths: 0,
        },
        date: null,
        country: 'all',
    },
    reducers: {
        changeInfo(state, action) {
            return {
                ...state,
                today: {
                    ...state.today,
                    confirmed: action.payload.today.confirmed,
                    recovered: action.payload.today.recovered,
                    deaths: action.payload.today.deaths,
                },
                total: {
                    ...state.total,
                    confirmed: action.payload.total.confirmed,
                    recovered: action.payload.total.recovered,
                    deaths: action.payload.total.deaths,
                },
                country: action.payload.country,
            }
        },
    }
})

const { actions, reducer } = covidSlice;
export const { changeInfo } = actions;
export default reducer;