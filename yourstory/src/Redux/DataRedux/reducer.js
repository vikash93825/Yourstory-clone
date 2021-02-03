import {
    FETCH_SOURCE_REQUEST,
    FETCH_SOURCE_SUCCESS,
    FETCH_SOURCE_FAILURE,
    FETCH_FILTERED_DATA_REQUEST,
    FETCH_FILTERED_DATA_SUCCESS,
    FETCH_FILTERED_DATA_FAILURE,
    FILTERBYSEARCH
  } 
  from "./actionTypes";
  
  const initStore = {
    isLoading: false,
    query: "",
    source: [],
    error: ""
  };
  
  const reducer = (state = initStore, {type,payload}) => {
    switch (type) {
      case FETCH_SOURCE_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case FETCH_SOURCE_SUCCESS:  
        return {
          isLoading: false,
          source: payload,
        };
      case FETCH_SOURCE_FAILURE:
        return {
          isLoading: false,
          error: payload
        };
        case FETCH_FILTERED_DATA_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case FETCH_FILTERED_DATA_SUCCESS:  
        return {
          isLoading: false,
          source: payload,
        };
      case FETCH_FILTERED_DATA_FAILURE:
        return {
          isLoading: false,
          error: payload
        };
      case FILTERBYSEARCH:
        return {
          source: payload
        }

      default:
        return state;
    }
  };
  
  export default reducer;