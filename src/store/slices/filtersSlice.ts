import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type TPriceRange = {
    from: number,
    to: number
}

export interface IFiltersState {
    brand: string,
    dressLength: string,
    size: string,
    color: string,
    price: TPriceRange,
    sortBy: string
}

const initialState: IFiltersState = {
    brand: '',
    dressLength: '',
    size: '',
    color: '',
    price: { from: 0, to: 0 },
    sortBy: ''
}

export const filtersSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setBrand(state, action: PayloadAction<string>) {
            state.brand = action.payload
        },
        setdressLength(state, action: PayloadAction<string>) {
            state.dressLength = action.payload
        },
        setsize(state, action: PayloadAction<string>) {
            state.size = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
// export const { } = counterSlice.actions

export default filtersSlice.reducer