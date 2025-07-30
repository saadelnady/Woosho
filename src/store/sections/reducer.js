import { HYDRATE } from "next-redux-wrapper";
import {
  GET_PAGE_DATA,
  GET_PAGE_DATA_FAILURE,
  GET_PAGE_DATA_SUCCESS,
  GET_SECTION_DATA,
  GET_SECTION_DATA_FAILURE,
  GET_SECTION_DATA_SUCCESS,
} from "./actionTypes";

const initialState = {
  sections: [],
  pageData: [],
  metadata: {},
  isLoggedIn: false,
  loading: false,
  error: "",
};

const sections = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      for (const key in action.payload?.sections) {
        if (Object.hasOwnProperty.call(action.payload?.sections, key)) {
          const element = action.payload?.sections[key];
          element === "init" && delete action.payload?.sections[key];
        }
      }
      return { ...state, ...action.payload.sections };

    // ====================================================
    // ====================================================

    case GET_SECTION_DATA:
      return { ...state, loading: true };

    case GET_SECTION_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        sections: action.payload.section,
      };

    case GET_SECTION_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };

    // ====================================================
    // ====================================================

    case GET_PAGE_DATA:
      return { ...state, loading: true };

    case GET_PAGE_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        pageData: action?.payload?.page?.sections,
      };

    case GET_PAGE_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };

    // ====================================================
    // ====================================================

    default:
      return state;
  }
};

export default sections;
