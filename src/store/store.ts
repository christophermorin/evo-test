import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { headerDataSlice } from '../reducers/headerReducer';
import { ordersDataSlice } from '../reducers/orderReducer';
import rootSaga from '../saga';

export type RootState = ReturnType<typeof store.getState>;

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    headerData: headerDataSlice.reducer,
    ordersData: ordersDataSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store