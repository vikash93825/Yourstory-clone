import {
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
  } from "./actionTypes";

  const initState = {
      isAuth:false,
      isLoading:false,
      isError:false,
      message:""
  }

  export const authReducer =(state=initState,{type,payload})=>{
      switch(type){
          case SIGNUP_REQUEST:
              return{
                  ...state,
                  isLoading:true
              }
            case SIGNUP_SUCCESS:
                return{
                    ...state,
                    isAuth:true,
                    isLoading:false,
                    message:payload
                }
            case SIGNUP_FAILURE:
                return{
                    ...state,
                    isError:true,
                    message:payload
                }
            default:
                return state
      }
  } 