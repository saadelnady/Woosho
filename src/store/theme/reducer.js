// store/reducers/themeReducer.js
import { SET_THEME } from "./actionTypes";

const initialState = {
  theme: "light",
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};

export default themeReducer;
