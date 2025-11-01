import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../apis/axiosInstance.js'

// const userSsignup = createAsyncThunk("signup", async (credentials) => {
//   const info = await api
//     .post("signup", credentials)
//     .then((result) => result.data)
//     .catch((error) => {
//       // console.log(error, error.response.data.error)
//       return { log: error.response.data.error };
//     });
//   // .catch((error) => (error.data.error, console.log(error)));
//   console.log(info);
//   return info;
// });

const getAll = createAsyncThunk('getAll', async (credentials) => {
  const info = await api
    .post('master/login', credentials)
    .then((result) => {
      return { status: result.status, data: result.data }
    })
    .catch((error) => {
      return { log: error.response.data.log }
      // console.log(error.response.data.log);
      // return { log: error };
    })
  // console.log(info.status, info.status == 200);

  // if(info.status == 200 ){
  //   localStorage.setItem("token", info.data.token)
  // }
  console.log(info)
  return info
})

const subscriptionSlice = createSlice({
  name: 'subscription',
  initialState: {
    message: null,
    status: null,
    plans : []
  },
  reducers: {
    // signup: (state) => {
    //   // state.value += 1;
    // },
  },
  extraReducers: (builder) => {
    builder
      // .addCase(userSsignup.fulfilled, (state, action) => {
      //   // state.message.push(action.payload.log);
      //   state.message = action.payload.log
      // })
      .addCase(login.fulfilled, (state, action) => {
        // if()
        // console.log(info.data.token)
        if (action.payload.status == 200) {
          localStorage.setItem('token', action.payload.data.token)
        }
        console.log(action, action.payload.log, state)

        // state.message = action.payload.log
        // state.status = action.payload.status
        // console.log("fullfilled");
      })
    // .addCase(login.rejected, (state, action) => {
    //   console.log("Errrrror", action);
    // });
  },
})
export const {} = authSlice.actions
export default authSlice.reducer
// apis
export { login }
