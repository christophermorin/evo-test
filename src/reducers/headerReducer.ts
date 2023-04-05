import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HeaderObject } from '../types/types';

interface HeaderDataState {
  data: HeaderObject | null
  isLoading: boolean,
  error: string | null
}

const initialState: HeaderDataState = {
  data: null,
  isLoading: false,
  error: null
}

export const headerDataSlice = createSlice({
  name: 'headerData',
  initialState,
  reducers: {
    fetchHeaderDataRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchHeaderDataSuccess: (state, action: PayloadAction<HeaderObject>) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    fetchHeaderDataFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
})

export const { fetchHeaderDataRequest, fetchHeaderDataSuccess, fetchHeaderDataFailure } = headerDataSlice.actions

export default headerDataSlice.reducer;