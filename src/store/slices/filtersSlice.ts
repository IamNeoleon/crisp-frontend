import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..';
import { TColor } from '../../components/Filters/Filters';

export type TPriceRange = {
    from: number,
    to: number
}

export interface IFiltersState {
    brands: string[],
    dressLengths: string[],
    size: string,
    color: TColor,
    price: TPriceRange,
    sort: string
}

const initialState: IFiltersState = {
    brands: [],
    dressLengths: [],
    size: '',
    color: { colorName: '', colorCode: '' },
    price: { from: 0, to: 0 },
    sort: ''
}

export const filtersSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setBrands(state, action: PayloadAction<string[]>) {
            state.brands = action.payload
        },
        setDressLengths(state, action: PayloadAction<string[]>) {
            state.dressLengths = action.payload
        },
        setSize(state, action: PayloadAction<string>) {
            state.size = action.payload
        },
        setColor(state, action: PayloadAction<TColor>) {
            state.color = action.payload
        },
        setPrice(state, action: PayloadAction<TPriceRange>) {
            state.price = action.payload
        },
        setSort(state, action: PayloadAction<string>) {
            state.sort = action.payload
        }
    },
})

export const { setBrands, setDressLengths, setSize, setColor, setPrice, setSort } = filtersSlice.actions
export const selectFilters = (state: RootState) => state.filters;

export default filtersSlice.reducer