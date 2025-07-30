import {
  GET_ALL_FAQS,
  GET_ALL_FAQS_FAILURE,
  GET_ALL_FAQS_SUCCESS,
} from "./actionTypes";

export const getAllFaqs = (payload) => {
  return {
    type: GET_ALL_FAQS,
    payload,
  };
};

export const getAllFaqsSuccess = (payload) => {
  return {
    type: GET_ALL_FAQS_SUCCESS,
    payload,
  };
};

export const getAllFaqsFailure = (payload) => {
  return {
    type: GET_ALL_FAQS_FAILURE,
    payload,
  };
};

// ====================================================
// ====================================================
