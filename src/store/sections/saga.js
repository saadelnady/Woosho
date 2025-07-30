import { takeEvery, fork, put, all, call } from "redux-saga/effects";
import { GET_PAGE_DATA, GET_SECTION_DATA } from "./actionTypes";
import {
  getPageDataFailure,
  getPageDataSuccess,
  getSectionDataFailure,
  getSectionDataSuccess,
} from "./actions";
import { getPageDataApi, getSectionDataApi } from "@/api/sections";

function* getSectionDataSaga({ payload }) {
  try {
    const { data } = yield call(getSectionDataApi, payload);

    yield put(getSectionDataSuccess(data));
  } catch (error) {
    yield put(getSectionDataFailure(error));
  }
}
// ====================================================
// ====================================================

function* getPageDataSaga({ payload }) {
  try {
    const { data } = yield call(getPageDataApi, payload);

    yield put(getPageDataSuccess(data));
  } catch (error) {
    yield put(getPageDataFailure(error));
  }
}

// ====================================================
// ====================================================

export function* watchGetSectionData() {
  yield takeEvery(GET_SECTION_DATA, getSectionDataSaga);
}

export function* watchGetPageData() {
  yield takeEvery(GET_PAGE_DATA, getPageDataSaga);
}

// ====================================================
// ====================================================

function* sectionsSaga() {
  yield all([fork(watchGetSectionData)]);
  yield all([fork(watchGetPageData)]);
}

export default sectionsSaga;
