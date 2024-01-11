import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    visualisation: 'None',
    allDaysData: {},
    specificDaysData: {},
    specificDayDate: '2018-02-19',
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        changeVisualisation: (state, action) => {
            state.visualisation = action.payload
        },
        setAllDaysData: (state, action) => {
            state.allDaysData = action.payload
        },
        setSpecificDaysData: (state, action) => {
            state.specificDaysData = action.payload
        },
        setSpecificDayDate: (state, action) => {
            state.specificDayDate = action.payload
        },
    },
})

export const {
    changeVisualisation,
    setAllDaysData,
    setSpecificDaysData,
    setSpecificDayDate,
} = appSlice.actions

export default appSlice.reducer
