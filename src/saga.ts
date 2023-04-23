import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchHeaderDataSuccess, fetchHeaderDataFailure, fetchHeaderDataRequest } from './reducers/headerReducer'
import { fetchOrdersDataSuccess, fetchOrdersDataFailure, fetchOrdersDataRequest } from './reducers/orderReducer';
import { fetchHeaderData, fetchOrdersData } from './services/fetchData';
import { HeaderObject, OrdersObject } from './types/types';

function* fetchHeaderDataSagaWorker() {
  try {
    yield put(fetchHeaderDataRequest())
    const response: HeaderObject = yield call(fetchHeaderData);
    yield put(fetchHeaderDataSuccess(response));
  } catch (error) {
    yield put(fetchHeaderDataFailure(error.message));
  }
}

function* fetchOrdersDataSagaWorker() {
  try {
    yield put(fetchOrdersDataRequest())
    const response: OrdersObject = yield call(fetchOrdersData);
    yield put(fetchOrdersDataSuccess(response));
  } catch (error) {
    yield put(fetchOrdersDataFailure(error.message));
  }
}

export default function* rootSaga() {
  yield takeEvery("FECTH_HEADER_DATA", fetchHeaderDataSagaWorker)
  yield takeEvery("FECTH_ORDERS_DATA", fetchOrdersDataSagaWorker)
}


