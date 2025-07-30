// store/sagas/themeSaga.js
import { put, takeLatest, select } from "redux-saga/effects";
import { setTheme } from "./actions";
import { TOGGLE_THEME } from "./actionTypes";

function* handleToggleTheme() {
  const currentTheme = yield select((state) => state.theme.theme);
  const newTheme = currentTheme === "light" ? "dark" : "light";
  yield put(setTheme(newTheme));
}

export function* watchTheme() {
  yield takeLatest(TOGGLE_THEME, handleToggleTheme);
}
