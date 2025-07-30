import { HYDRATE } from "next-redux-wrapper";
import {
  GET_ALL_SOCIALS,
  GET_ALL_SOCIALS_FAILURE,
  GET_ALL_SOCIALS_SUCCESS,
} from "./actionTypes";

const initialState = {
  socials: [],
  metadata: {},
  isLoggedIn: false,
  loading: false,
  error: "",
};

const socials = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      for (const key in action.payload?.socials) {
        if (Object.hasOwnProperty.call(action.payload?.socials, key)) {
          const element = action.payload?.socials[key];
          element === "init" && delete action.payload?.socials[key];
        }
      }
      return { ...state, ...action.payload.socials };

    case GET_ALL_SOCIALS:
      return { ...state, loading: true };

    case GET_ALL_SOCIALS_SUCCESS:
      return {
        ...state,
        loading: false,
        socials: action?.payload?.socials,
      };

    case GET_ALL_SOCIALS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default socials;
