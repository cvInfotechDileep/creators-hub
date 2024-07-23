import axios from "axios"

const baseURL = "https://creatorshub.online/apibackend/api"

export const signinApi = (credentials) => {
   return axios.post(`${baseURL}/login`, credentials)
}

export const signUpApi = (credentials) => {
   //  console.log(credentials,"lllllllllll")
   return axios.post(`${baseURL}/register`, credentials)
}

export const checkUsernameApi = ( user, accountType ) => {
   console.log({ "ooooooo": user, "ppppppppp": accountType })
   return axios.post(`${baseURL}/getusername_with_type/?username=${user}&user_type=${accountType}`)
}