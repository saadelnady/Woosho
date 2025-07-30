import { all } from "redux-saga/effects";

import faqsSaga from "./faqs/saga";
import sectionsSaga from "./sections/saga";
import socialsSaga from "./socials/saga";
import settingsSga from "./settings/saga";
import { watchTheme } from "./theme/saga";

export default function* rootSaga() {
  yield all([
    faqsSaga(),
    sectionsSaga(),
    socialsSaga(),
    settingsSga(),
    watchTheme(),
  ]);
}
