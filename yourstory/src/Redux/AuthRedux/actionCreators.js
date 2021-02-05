import axios from "axios";
import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "./actionTypes";

export const registerRequest = (payload)=>({
    type:SIGNUP_REQUEST,
    payload
})

export const registerSuccess = (payload)=>({
    type:SIGNUP_SUCCESS,
    payload
})

export const registerFailure = (payload)=>({
    type:SIGNUP_FAILURE,
    payload
})

export const registerData = (payload)=>(dispatch)=>{
    console.log(payload)
    dispatch(registerRequest())
    axios({
        method:"post",
        url:"http://localhost:3002/user",
        data:payload
    })
    .then((res)=>{
        dispatch(registerSuccess({message:"successfully created"}))
    })
    .catch(err=>dispatch(registerFailure({message:"something wrong"})))
}