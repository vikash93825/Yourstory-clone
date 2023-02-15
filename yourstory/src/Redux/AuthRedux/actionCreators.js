import axios from "axios";
import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOG_OUT
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
        url:"https://yourstory-server.vercel.app/user",
        data:payload
    })
    .then((res)=>{
       return dispatch(registerSuccess({message:"successfully created"}))
    })
    .catch(err=>dispatch(registerFailure({message:"something wrong"})))
}

//login
export const loginRequest = (payload)=>({
    type:LOGIN_REQUEST,
    payload
})

export const loginSuccess = (payload)=>({
    type:LOGIN_SUCCESS,
    payload
})

export const loginFailure = (payload)=>({
    type:LOGIN_FAILURE,
    payload
})

export const loginOut = (payload) => ({
    type: LOG_OUT,
    payload,
  });

export const loginData = (payload)=>(dispatch)=>{
    console.log(payload)
    dispatch(loginRequest())
    axios({
        method:"get",
        url:"https://yourstory-server.vercel.app/user",
    })
    .then((res)=>{
        console.log(res.data)
        return dispatch(loginSuccess(res.data))
    })
    .catch(err=>dispatch(loginFailure({message:"something wrong"})))
}
