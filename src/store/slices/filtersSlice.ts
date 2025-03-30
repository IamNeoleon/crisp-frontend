import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IFiltersState {
    value: number
}

const initialState: IFiltersState = {
    value: 0,
}

export const filtersSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
    },
})

// Action creators are generated for each case reducer function
// export const { } = counterSlice.actions

export default filtersSlice.reducer