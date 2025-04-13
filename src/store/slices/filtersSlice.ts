import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..';
import { TColor } from '../../components/Filters/Filters';

export type TPriceRange = {
    from: number,
    to: number
}

export interface IFiltersState {
    draft: {
        brands: string[],
        dressLengths: string[],
        size: string,
        color: TColor,
        price: TPriceRange,
    },
    applied: {
        brands: string[],
        dressLengths: string[],
        size: string,
        color: TColor,
        price: TPriceRange,
    }
}

const initialState: IFiltersState = {
    draft: {
        brands: [],
        size: '',
        color: {
            colorCode: '',
            colorName: ''
        },
        dressLengths: [],
        price: { from: 0, to: 0 },
    },
    applied: {
        brands: [],
        size: '',
        color: {
            colorCode: '',
            colorName: ''
        },
        dressLengths: [],
        price: { from: 0, to: 0 },
    },
}

export const filtersSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setDraftBrands(state, action: PayloadAction<string>) {
            const brand = action.payload.toLowerCase(); // можно тут toLowerCase, если ты так хранишь
            const index = state.draft.brands.indexOf(brand);
            if (index === -1) {
                state.draft.brands.push(brand);
            } else {
                state.draft.brands.splice(index, 1);
            }
        },
        setDraftDressLengths(state, action: PayloadAction<string>) {
            const length = action.payload.toLowerCase();
            const index = state.draft.dressLengths.indexOf(length);
            if (index === -1) {
                state.draft.dressLengths.push(length);
            } else {
                state.draft.dressLengths.splice(index, 1);
            }
        },
        setDraftSize(state, action: PayloadAction<string>) {
            if (state.draft.size == action.payload) {
                state.draft.size = '';
            } else {
                state.draft.size = action.payload;
            }
        },
        setDraftColor(state, action: PayloadAction<TColor>) {
            state.draft.color = action.payload
        },
        setDraftPrice(state, action: PayloadAction<TPriceRange>) {
            state.draft.price = action.payload
        },
        applyFilters(state) {
            state.applied = { ...state.draft }
        },
        resetFilters(state) {
            state.draft = initialState.draft;
            state.applied = initialState.applied;
        },
    },
})

export const { setDraftBrands, setDraftDressLengths, setDraftSize, setDraftColor, setDraftPrice, applyFilters, resetFilters } = filtersSlice.actions
export const selectDraftFilters = (state: RootState) => state.filters.draft;
export const selectAppliedsFilters = (state: RootState) => state.filters.applied;

export default filtersSlice.reducer