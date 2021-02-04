import axios from "axios";
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

export const fetchSourceRequest = () => {
  console.log("fetch Source Request");
  return {
    type: FETCH_SOURCE_REQUEST,
  };
};

export const fetchSourceSuccess = payload => {
  console.log("fetch Source Success",payload);
  return {
    type: FETCH_SOURCE_SUCCESS,
    payload
  };
};

export const fetchSourceFailure = error => {
  console.log("fetch Source Failure",error);
  return {
    type: FETCH_SOURCE_FAILURE,
    error
  };
};

export const fetchFilteredDataRequest = () => {
  console.log("fetch Source Request");
  return {
    type: FETCH_FILTERED_DATA_REQUEST,
  };
};

export const fetchFilteredDataSuccess = payload => {
  console.log("fetch FILTERED_DATA Success",payload);
  return {
    type: FETCH_FILTERED_DATA_SUCCESS,
    payload
  };
};

export const fetchFilteredDataFailure = error => {
  console.log("fetch FILTERED_DATA Failure",error);
  return {
    type: FETCH_FILTERED_DATA_FAILURE,
    error
  };
};

export const filterBySearch = payload => {
  console.log("FILTERBYSEARCH",payload);
  return {
    type: FILTERBYSEARCH,
    payload
  };
};


export const fetchSourceData = () => dispatch => {
  console.log('fetchSourceData');
  dispatch(fetchSourceRequest());
  
  return axios
  .get(`http://localhost:3002/sources`)
  .then(res => {
    console.log("response success", res.data);
    dispatch(fetchSourceSuccess(res.data));
  })
  .catch(err => dispatch(fetchSourceFailure(err)));
}

const categoryParams = (params) => {
  var categoryArr = []
  var s = params.map((item) => item.key === "category" && categoryArr.push(item.value))
  return categoryArr
}

const tagParams = (params) => {
  var tagArr = []
  var s = params.map((item) => item.key === "tag" && tagArr.push(item.value))
  return tagArr
}

const authorParams = (params) => {
  var authorArr = []
  var s = params.map((item) => item.key === "authors" && authorArr.push(item.value))
  return authorArr
}

export const fetchFilteredData = (params) => dispatch => {
  console.log('fetchFilteredData',params);
  
  dispatch(fetchFilteredDataRequest());

    let category = categoryParams(params)
    let tag = tagParams(params)
    let authors = authorParams(params)

    let config = {
        method: 'GET',
        url: 'http://localhost:3002/sources',
        params: {
            category,
            tag,
            authors
        },
    }
    
    return axios( config )
    .then( res => {
      console.log(res);
        dispatch( fetchFilteredDataSuccess( res.data ) )
    })
    .catch( err => {
            console.log( "fetch")
            dispatch( fetchFilteredDataFailure( err) )
        })
  }
