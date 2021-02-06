import axios from "axios";
import {
  FETCH_SOURCE_REQUEST,
  FETCH_SOURCE_SUCCESS,
  FETCH_SOURCE_FAILURE,
  FETCH_FILTERED_DATA_REQUEST,
  FETCH_FILTERED_DATA_SUCCESS,
  FETCH_FILTERED_DATA_FAILURE,
  FILTERBYSEARCH,
  FILTERBYLANGUAGEREQUEST,
  FILTERBYLANGUAGESUCCESS,
  FILTERBYLANGUAGEFAILURE,
  POSTSTORY,
  POSTSTORYSUCCESS,
  POSTSTORYFAILURE,
  BOOKMARK_REQUEST,
  BOOKMARK_SUCCESS,
  BOOKMARK_FAILURE,
  GET_BOOKMARK_FAILURE,
  GET_BOOKMARK_REQUEST,
  GET_BOOKMARK_SUCCESS
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

export const filterByLanguage = payload => {
  console.log("FILTERBYLANGUAGE",payload);
  return {
    type: FILTERBYLANGUAGEREQUEST,
    payload
  };
};

export const filterByLanguageSuccess = payload => {
  console.log("FILTERBYLANGUAGESUCCESS",payload);
  return {
    type: FILTERBYLANGUAGESUCCESS,
    payload
  };
};

export const filterByLanguageFailure = payload => {
  console.log("FILTERBYLANGUAGEFAILURE",payload);
  return {
    type: FILTERBYLANGUAGEFAILURE,
    payload
  };
};

export const postStorySuccess = payload => {
  console.log("POSTSTORYSUCCESS",payload);
  // return {
  //   type: POSTSTORYSUCCESS,
  //   payload
  // };
};

export const postStoryFailure = payload => {
  console.log("POSTSTORYFAILURE",payload);
  // return {
  //   type: POSTSTORYFAILURE,
  //   payload
  // };
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


export const fetchLanguageData = (lang) => dispatch => {
    console.log('fetchLanguageData',lang);
    if(lang === 'english'){
      dispatch(fetchSourceData())
      return 
    }
    var language = 'en';

    if(lang === 'fr'){
      language = "french"
    }
    if(lang === 'de'){
      language = 'german'
    }
    if(lang === 'en'){
      return dispatch(fetchSourceData())
    }

    console.log(language)
    dispatch(filterByLanguage());
      let config = {
          method: 'GET',
          url: 'http://localhost:3002/sources/',
      }

      return axios( config )
      .then( res => {
        console.log(res)
        console.log(language)
        console.log(res.data.map(item=>item[language]));
          dispatch( filterByLanguageSuccess( res.data.map(item=>item[language])))
      })
      .catch( err => {
              console.log( "fetch")
              dispatch( filterByLanguageFailure( err) )
          })
}

export const postStory = (payload) => dispatch => {
  console.log(payload)
  return axios({
    method: 'POST',
    url: 'http://localhost:3002/sources/',
    data: payload
  })
  // .then(res => dispatch(postStorySuccess(res)))
  // .catch(err => dispatch(postStoryFailure(err)))
}

export const postBookMarkReq = (payload)=>({
  type:BOOKMARK_REQUEST,
  payload
})

export const postBookMarkSuccess = (payload)=>({
  type:BOOKMARK_SUCCESS,
  payload
})

export const postBookMarkFailure = (payload)=>({
  type:BOOKMARK_FAILURE,
  payload
})

export const postBookMarkData = (payload)=>(dispatch)=>{
  dispatch(postBookMarkReq())
  axios({
    method:"post",
    url:"http://localhost:3002/bookmark",
    data:payload
  })
  .then(res=>dispatch(postBookMarkSuccess({message:"bookmark added"})))
  .catch(err=>dispatch(postBookMarkFailure({message:"error"})))
}


export const getBookMarkReq = (payload)=>({
  type:GET_BOOKMARK_REQUEST,
  payload
})

export const getBookMarkSuccess = (payload)=>({
  type:GET_BOOKMARK_SUCCESS,
  payload
})

export const getBookMarkFailure = (payload)=>({
  type:GET_BOOKMARK_FAILURE,
  payload
})

export const getBookMarkData = (payload)=>(dispatch)=>{
  dispatch(getBookMarkReq())
  axios({
    method:"get",
    url:"http://localhost:3002/bookmark",
  })
  .then(res=>dispatch(getBookMarkSuccess(res.data)))
  .catch(err=>dispatch(getBookMarkFailure({message:"error"})))
}