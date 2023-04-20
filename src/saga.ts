import { call, put, all, takeLatest } from 'redux-saga/effects';
import { fetchHeaderDataSuccess, fetchHeaderDataFailure, fetchHeaderDataRequest } from './reducers/headerReducer'
import { fetchOrdersDataSuccess, fetchOrdersDataFailure, fetchOrdersDataRequest } from './reducers/orderReducer';
import { fetchHeaderData, fetchOrdersData } from './services/fetchData';
import { HeaderObject, OrdersObject } from './types/types';

// Define a helper function to call the API and handle errors
function* fetchHeaderDataSagaWorker() {
  try {
    const response: HeaderObject = yield call(fetchHeaderData); // Type safety for API response
    yield put(fetchHeaderDataSuccess(response)); // Dispatch success action with response data
  } catch (error) {
    console.log(error.message)
    yield put(fetchHeaderDataFailure(error.message)); // Dispatch failure action with error message
  }
}

function* fetchOrdersDataSagaWorker() {
  try {
    const response: OrdersObject = yield call(fetchOrdersData); // Type safety for API response
    yield put(fetchOrdersDataSuccess(response)); // Dispatch success action with response data
  } catch (error) {
    yield put(fetchOrdersDataFailure(error.message)); // Dispatch failure action with error message
  }
}

// Define the Saga watch function to listen for action and trigger worker
function* fetchHeaderDataSagaWatcher() {
  yield takeLatest(fetchHeaderDataRequest.type, fetchHeaderDataSagaWorker);
}

function* fetchOrdersDataSagaWatcher() {
  yield takeLatest(fetchOrdersDataRequest.type, fetchOrdersDataSagaWorker);

}

export default function* rootSaga() {
  yield all([
    fetchHeaderDataSagaWatcher(),
    fetchOrdersDataSagaWatcher(),
  ]);
}


