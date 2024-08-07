// // import { createSlice } from '@reduxjs/toolkit';

// // const initialState = {
// //   token: localStorage.getItem('token') || null,
// //   loading: false,
// //   error: null,
// // };

// // const authSlice = createSlice({
// //   name: 'auth',
// //   initialState,
// //   reducers: {
// //     signInStart: (state) => {
// //       state.loading = true;
// //       state.error = null;
// //     },
// //     signInSuccess: (state, action) => {
// //       state.loading = false;
// //       state.token = action.payload;
// //     },
// //     signInFailure: (state, action) => {
// //       state.loading = false;
// //       state.error = action.payload;
// //     },
// //     signOut: (state) => {
// //       localStorage.removeItem('token');
// //       state.token = null;
// //     },
// //   },
// // });

// // export const { signInStart, signInSuccess, signInFailure, signOut } = authSlice.actions;
// // export default authSlice.reducer;







// // import { createSlice } from '@reduxjs/toolkit';

// // const initialState = {
// //   token: localStorage.getItem('token') || null,
// //   user: JSON.parse(localStorage.getItem('user')) || null,
// //   loading: false,
// //   error: null,
// // };

// // const authSlice = createSlice({
// //   name: 'auth',
// //   initialState,
// //   reducers: {
// //     signInStart: (state) => {
// //       state.loading = true;
// //       state.error = null;
// //     },
// //     signInSuccess: (state, action) => {
// //       state.loading = false;
// //       state.token = action.payload.token;
// //       state.user = action.payload.user;
// //     },
// //     signInFailure: (state, action) => {
// //       state.loading = false;
// //       state.error = action.payload;
// //     },
// //     signOut: (state) => {
// //       localStorage.removeItem('token');
// //       localStorage.removeItem('user');
// //       state.token = null;
// //       state.user = null;
// //     },
// //     setUser: (state, action) => {
// //       console.log(action,"kkk")
// //       state.user = action.payload;
// //     },
// //   },
// // });

// // export const { signInStart, signInSuccess, signInFailure, signOut, setUser } = authSlice.actions;
// // export default authSlice.reducer;


// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   token: localStorage.getItem('token') || null,
//   user: JSON.parse(localStorage.getItem('user')) || null,
//   loading: false,
//   error: null,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     signInStart: (state, action) => {
//       state.loading = true;
//       state.error = null;
//     },
//     signInSuccess: (state, action) => {
//       state.loading = false;
//       state.token = action.payload.token;
//       state.user = action.payload.user;
//     },
//     signInFailure: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },
//     signOut: (state) => {
//       localStorage.removeItem('token');
//       localStorage.removeItem('user');
//       state.token = null;
//       state.user = null;
//     },
//     setUser: (state, action) => {
//       state.user = action.payload;
//     },
//   },
// });

// export const { signInStart, signInSuccess, signInFailure, signOut, setUser } = authSlice.actions;
// export default authSlice.reducer;


// ====================


// import { createSlice } from '@reduxjs/toolkit';

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     token: null,
//     loading: false,
//     error: null,
//   },
//   reducers: {
//     signInStart: (state) => {
//       state.loading = true;
//     },
//     signInSuccess: (state, action) => {
//       state.loading = false;
//       state.token = action.payload;
//     },
//     signInFailure: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },
//     setToken: (state, action) => {
//       state.token = action.payload;
//     }
//   }
// });

// export const { signInStart, signInSuccess, signInFailure, setToken } = authSlice.actions;

// export default authSlice.reducer;

// ========================

import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    user_type: null, // Add user_type to the initial state
    loading: false,
    error: null,
  },
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.loading = false;
      state.token = action.payload.token;
      state.user_type = action.payload.user_type; // Set user_type when sign in is successful
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload.token;
      state.user_type = action.payload.user_type; // Set user_type when token is set
    }
  }
});

export const { signInStart, signInSuccess, signInFailure, setToken } = authSlice.actions;

export default authSlice.reducer;
