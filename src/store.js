import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slices/auth'
import uiSlice from "./slices/uiSlice"

const store = configureStore({
  reducer: {
    auth: authSlice,
    ui: uiSlice, 
  },
})
export default store 
