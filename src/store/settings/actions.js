import {
  GET_ALL_SETTINGS,
  GET_ALL_SETTINGS_FAILURE,
  GET_ALL_SETTINGS_SUCCESS,
} from "./actionTypes";

export const getAllSettings = (payload) => {
  return {
    type: GET_ALL_SETTINGS,
    payload,
  };
};

export const getAllSettingsSuccess = (payload) => {
  return {
    type: GET_ALL_SETTINGS_SUCCESS,
    payload,
  };
};

export const getAllSettingsFailure = (payload) => {
  return {
    type: GET_ALL_SETTINGS_FAILURE,
    payload,
  };
};

// ====================================================
// ====================================================
