import {
  GET_PAGE_DATA,
  GET_PAGE_DATA_FAILURE,
  GET_PAGE_DATA_SUCCESS,
  GET_SECTION_DATA,
  GET_SECTION_DATA_FAILURE,
  GET_SECTION_DATA_SUCCESS,
} from "./actionTypes";

export const getSectionData = (payload) => {
  return {
    type: GET_SECTION_DATA,
    payload,
  };
};

export const getSectionDataSuccess = (payload) => {
  return {
    type: GET_SECTION_DATA_SUCCESS,
    payload,
  };
};

export const getSectionDataFailure = (payload) => {
  return {
    type: GET_SECTION_DATA_FAILURE,
    payload,
  };
};

// ====================================================
// ====================================================


export const getPageData = (payload) => {
  return {
    type: GET_PAGE_DATA,
    payload,
  };
};

export const getPageDataSuccess = (payload) => {
  return {
    type: GET_PAGE_DATA_SUCCESS,
    payload,
  };
};

export const getPageDataFailure = (payload) => {
  return {
    type: GET_PAGE_DATA_FAILURE,
    payload,
  };
};

// ====================================================
// ====================================================