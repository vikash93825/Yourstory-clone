import {
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOG_OUT
  } from "./actionTypes";

  const initState = {
      isAuth:false,
      isLoading:false,
      isError:false,
      message:"",
      userData:[]
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
                case LOGIN_REQUEST:
                    return{
                        ...state,
                        isLoading:true
                    }
                  case LOGIN_SUCCESS:
                      return{
                          ...state,
                          isAuth:true,
                          isLoading:false,
                          userData:payload
                      }
                  case LOGIN_FAILURE:
                      return{
                          ...state,
                          isError:true,
                          message:payload
                      }
                      case LOG_OUT:
                        return {
                          ...state,
                          isAuth: false,
                        };
            default:
                return state
      }
  } 