import { getAllFaqsApi } from "@/api/faqs";
import { takeEvery, fork, put, all, call } from "redux-saga/effects";
import { GET_ALL_FAQS } from "./actionTypes";
import { getAllFaqsFailure, getAllFaqsSuccess } from "./actions";

function* getAllFaqsSaga({ payload }) {
  try {
    const { data } = yield call(getAllFaqsApi, payload);

    yield put(getAllFaqsSuccess(data));
  } catch (error) {
    yield put(getAllFaqsFailure(error));
  }
}
// ====================================================
// ====================================================

export function* watchGetAllFaqs() {
  yield takeEvery(GET_ALL_FAQS, getAllFaqsSaga);
}

// ====================================================
// ====================================================

function* faqsSaga() {
  yield all([fork(watchGetAllFaqs)]);
}

export default faqsSaga;
