import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OrdersObject } from '../types/types';

interface OrdersDataState {
  data: OrdersObject | null
  isLoading: boolean,
  error: string | null
}

const initialState: OrdersDataState = {
  data: null,
  isLoading: false,
  error: null
}

export const ordersDataSlice = createSlice({
  name: 'orderData',
  initialState,
  reducers: {
    fetchOrdersDataRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchOrdersDataSuccess: (state, action: PayloadAction<OrdersObject>) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    fetchOrdersDataFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
})

export const { fetchOrdersDataRequest, fetchOrdersDataSuccess, fetchOrdersDataFailure } = ordersDataSlice.actions

export default ordersDataSlice.reducer;