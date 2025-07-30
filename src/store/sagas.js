import { all } from "redux-saga/effects";

import { watchTheme } from "./theme/saga";

export default function* rootSaga() {
  yield all([watchTheme()]);
}
