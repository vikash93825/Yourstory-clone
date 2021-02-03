import {
    FETCH_SOURCE_REQUEST,
    FETCH_SOURCE_SUCCESS,
    FETCH_SOURCE_FAILURE
  } from "./actionTypes";
  
  const initStore = {
    isLoading: false,
    query: "",
    source: [],
    error: ""
  };
  
  const reducer = (state = initStore, action) => {
    switch (action.type) {
      case FETCH_SOURCE_REQUEST:
        return {
          ...state,
          isLoading: true,
          query: action.query
        };
      case FETCH_SOURCE_SUCCESS:  
        return {
          isLoading: false,
          source: action.data,
          error: state.error
        };
      case FETCH_SOURCE_FAILURE:
        return {
          isLoading: false,
          data: state.data,
          error: action.error
        };
      default:
        return state;
    }
  };
  
  export default reducer;