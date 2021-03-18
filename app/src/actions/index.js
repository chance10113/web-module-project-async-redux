import axios from "axios";
export const FETCH_SRC_LOADING = "FETCH_SRC_LOADING";
export const FETCH_SRC_SUCCESS = "FETCH_SRC_SUCCESS";
export const FETCH_SRC_FAILURE = "FETCH_SRC_FAILURE";

export const getSrc = () => {
    return (dispatch) => {
        // Loading State
        dispatch({ type: FETCH_SRC_LOADING });
    
        // Fetch
        axios
          .get("https://picsum.photos/v2/list?limit=100") // Can change limit number to less or more
          .then((res) => {
            // send the reducer the data
            dispatch({ type: FETCH_SRC_SUCCESS, payload: res.data.results });
          })
          .catch((err) =>
            dispatch({ type: FETCH_SRC_FAILURE, payload: err.message })
          );
      };
    };

export const fetchSrcLoading = () => {
  return { type: fetchSrcLoading };
};

export const fetchSrcSuccess = (url) => {
  return { type: FETCH_SRC_SUCCESS, payload: url };
};

export const fetchSrcFailure = (error) => {
  return { type: FETCH_SRC_FAILURE, payload: error };
};
