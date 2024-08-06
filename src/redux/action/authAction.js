import { signInStart, signInSuccess, signInFailure, setToken } from '../authSlice';
import { store } from '../store';
import api from '../../Apis/api';

export const login = (token, role) => {
  localStorage.setItem('token', token);
  localStorage.setItem('role', role); // Store role in localStorage
  store.dispatch(setToken({ token, role }));
};

// Example of async action creator
export const signIn = (credentials) => async (dispatch) => {
  try {
    dispatch(signInStart());
    // Call your API to authenticate the user and get the token and role
    const response = await api.signIn(credentials); // Adjust API call accordingly
    const { token, role } = response.data;

    localStorage.setItem('token', token);
    localStorage.setItem('role', role); // Store role in localStorage
    dispatch(signInSuccess({ token, role }));
  } catch (error) {
    dispatch(signInFailure(error.message));
  }
};
