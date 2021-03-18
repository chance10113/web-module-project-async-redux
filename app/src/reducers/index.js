import {
  FETCH_SRC_LOADING,
  FETCH_SRC_SUCCESS,
  FETCH_SRC_FAILURE,
} from "../actions";

const initialState = {
  src: [],
  isFetching: false,
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SRC_LOADING:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_SRC_SUCCESS:
      return {
        ...state,
        isFetching: false,
        src: action.payload,
      };
    case FETCH_SRC_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
