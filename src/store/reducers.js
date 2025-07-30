import { combineReducers } from "redux";

import faqsReducer from "./faqs/reducer";
import sectionsReducer from "./sections/reducer";
import socialsReducer from "./socials/reducer";
import settingsReducer from "./settings/reducer";
import themeReducer from "./theme/reducer";

const rootReducer = combineReducers({
  faqs: faqsReducer,
  sections: sectionsReducer,
  socials: socialsReducer,
  settings: settingsReducer,
  theme: themeReducer,
});

export default rootReducer;
