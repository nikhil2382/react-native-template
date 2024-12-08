import { all, fork } from 'redux-saga/effects';

import homeSaga from './homeSaga';

export default function* root() {
  yield all([fork(homeSaga)]);
}
