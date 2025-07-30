import { takeEvery, fork, put, all, call } from "redux-saga/effects";
import { GET_ALL_SETTINGS } from "./actionTypes";
import { getAllSettingsFailure, getAllSettingsSuccess } from "./actions";
import { getAllSettingsApi } from "@/api/settings";

function* getAllSettingsSaga({ payload }) {
  try {
    const { data } = yield call(getAllSettingsApi, payload);

    yield put(getAllSettingsSuccess(data));
  } catch (error) {
    yield put(getAllSettingsFailure(error));
  }
}
// ====================================================
// ====================================================

export function* watchGetAllSettings() {
  yield takeEvery(GET_ALL_SETTINGS, getAllSettingsSaga);
}

// ====================================================
// ====================================================

function* settingsSaga() {
  yield all([fork(watchGetAllSettings)]);
}

export default settingsSaga;
