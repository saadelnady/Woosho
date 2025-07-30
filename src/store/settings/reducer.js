import { HYDRATE } from "next-redux-wrapper";
import {
  GET_ALL_SETTINGS,
  GET_ALL_SETTINGS_FAILURE,
  GET_ALL_SETTINGS_SUCCESS,
} from "./actionTypes";

const initialState = {
  settings: {},
  metadata: {},
  isLoggedIn: false,
  loading: false,
  error: "",
};

const settings = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      for (const key in action.payload?.settings) {
        if (Object.hasOwnProperty.call(action.payload?.settings, key)) {
          const element = action.payload?.settings[key];
          element === "init" && delete action.payload?.settings[key];
        }
      }
      return { ...state, ...action.payload.settings };

    case GET_ALL_SETTINGS:
      return { ...state, loading: true };

    case GET_ALL_SETTINGS_SUCCESS:
      return {
        ...state,
        loading: false,
        settings: action?.payload?.siteInfo,
      };

    case GET_ALL_SETTINGS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default settings;
