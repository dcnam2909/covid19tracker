import { createSlice } from '@reduxjs/toolkit';


const covidSlice = createSlice({
    name: 'covid',
    initialState: {
        today: {
            confirmed: 0,
            recovered: 0,
            deaths: 0,
        },
        infoByDate: {
            numbDate: 0,
            date: [],
            confirmed: [],
            recovered: [],
            deaths: [],
        },
        total: {
            confirmed: 0,
            recovered: 0,
            deaths: 0,
        },
        date: null,
        country: 'all',
        listCountry: {
            options: 'case',
            country: [],
        },
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
        getInfoByDate(state, action) {
            return {
                ...state,
                infoByDate: {
                    ...state.infoByDate,
                    numbDate: action.payload.numbDate,
                    date: action.payload.date,
                    confirmed: action.payload.confirmed,
                    recovered: action.payload.recovered,
                    deaths: action.payload.deaths,
                }
            }
        },
        changeListCountry(state, action) {
            return {
                ...state,
                listCountry: {
                    ...state.listCountry,
                    country: [action.payload.country],
                },
            }
        },
        changeOption(state, action) {
            return {
                ...state,
                listCountry: {
                    ...state.listCountry,
                    options: action.payload.option,
                },
            }
        }
    }
})

const { actions, reducer } = covidSlice;
export const { changeInfo, getInfoByDate, changeListCountry, changeOption } = actions;
export default reducer;