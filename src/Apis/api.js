import axios from "axios"

const baseURL ="https://creatorshub.online/apibackend/api"

export const signinApi= (credentials)=>{
   return axios.post(`${baseURL}/login`, credentials)
}

export const signUpApi= (credentials)=>{
    console.log(credentials,"lllllllllll")
   return axios.post(`${baseURL}/register`, credentials)
}