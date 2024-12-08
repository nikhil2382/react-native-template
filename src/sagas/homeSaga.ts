import { sampleFailure, sampleSuccess } from 'actions/homeActions';
import { TYPES } from 'actions/types';
import { all, put, takeLatest } from 'redux-saga/effects';

function* sampleSaga() {
  try {
    yield put(sampleSuccess());
  } catch (error) {
    yield put(sampleFailure());
  }
}

function* homeSaga() {
  yield all([takeLatest(TYPES.HOME.START, sampleSaga)]);
}

export default homeSaga;
