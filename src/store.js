import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slices/auth'
import uiSlice from "./slices/uiSlice"
import subscription from "./slices/master/subscription"

const store = configureStore({
  reducer: {
    auth: authSlice,
    ui: uiSlice, 
    subscription : subscription
  },
})
export default store 
