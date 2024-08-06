import axios from 'axios';

const baseURL = 'https://creatorshub.online/apibackend/api';
const baseURLForLogin = 'https://creatorshub.online/apibackend/auth';

export const signinApi = (credentials) => {
  return axios.post(`${baseURL}/login`, credentials);
};

export const signinWithGoogleApi = () => {
  return axios.get(`${baseURLForLogin}/google`);
};

export const signinWithTwitchApi = () => {
  return axios.get(`${baseURLForLogin}/twitch/redirect`);
};
export const signinWithAppleApi = () => {
  return axios.get(`${baseURLForLogin}/apple`);
};
// export const signinWithYouTubeApi = (credentials) => {
//    return axios.get(`${baseURLForLogin}/google`, credentials);
// }
export const signinWithTwitterApi = () => {
  return axios.get(`${baseURLForLogin}/twitter/redirect`);
};

export const signUpApi = (credentials) => {
  console.log(credentials, 'lllllllllll');
  return axios.post(
    `${baseURL}/register`,
    { credentials },
  );
};

export const checkUsernameApi = (user, accountType) => {
  console.log({ ooooooo: user, ppppppppp: accountType });
  return axios.get(
    `${baseURL}/getusername_with_type?username=${user}&user_type=${accountType}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
};
