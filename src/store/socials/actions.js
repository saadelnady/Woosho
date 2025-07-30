import {
  GET_ALL_SOCIALS,
  GET_ALL_SOCIALS_FAILURE,
  GET_ALL_SOCIALS_SUCCESS,
} from "./actionTypes";

export const getAllSocials = (payload) => {
  return {
    type: GET_ALL_SOCIALS,
    payload,
  };
};

export const getAllSocialsSuccess = (payload) => {
  return {
    type: GET_ALL_SOCIALS_SUCCESS,
    payload,
  };
};

export const getAllSocialsFailure = (payload) => {
  return {
    type: GET_ALL_SOCIALS_FAILURE,
    payload,
  };
};

// ====================================================
// ====================================================
