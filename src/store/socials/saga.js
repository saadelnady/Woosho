import { getAllSocialsApi } from "@/api/socials";
import { takeEvery, fork, put, all, call } from "redux-saga/effects";
import { GET_ALL_SOCIALS } from "./actionTypes";
import { getAllSocialsFailure, getAllSocialsSuccess } from "./actions";

function* getAllSocialsSaga({ payload }) {
  try {
    const { data } = yield call(getAllSocialsApi, payload);

    yield put(getAllSocialsSuccess(data));
  } catch (error) {
    yield put(getAllSocialsFailure(error));
  }
}
// ====================================================
// ====================================================

export function* watchGetAllSocials() {
  yield takeEvery(GET_ALL_SOCIALS, getAllSocialsSaga);
}

// ====================================================
// ====================================================

function* socialsSaga() {
  yield all([fork(watchGetAllSocials)]);
}

export default socialsSaga;
