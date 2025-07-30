import { HYDRATE } from "next-redux-wrapper";
import {
  GET_ALL_FAQS,
  GET_ALL_FAQS_FAILURE,
  GET_ALL_FAQS_SUCCESS,
} from "./actionTypes";

const initialState = {
  faqs: [],
  metadata: {},
  isLoggedIn: false,
  loading: false,
  error: "",
};

const faqs = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      for (const key in action.payload?.faqs) {
        if (Object.hasOwnProperty.call(action.payload?.faqs, key)) {
          const element = action.payload?.faqs[key];
          element === "init" && delete action.payload?.faqs[key];
        }
      }
      return { ...state, ...action.payload.faqs };

    case GET_ALL_FAQS:
      return { ...state, loading: true };

    case GET_ALL_FAQS_SUCCESS:
      return {
        ...state,
        loading: false,
        faqs: action.payload.data,
        metadata: {
          pageNumber: action.payload.pageNumber,
          pageSize: action.payload.pageSize,
          totalCount: action.payload.totalCount,
          totalPages: action.payload.totalPages,
        },
      };

    case GET_ALL_FAQS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default faqs;
