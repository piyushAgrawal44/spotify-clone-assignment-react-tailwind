import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";

const rootReducer = combineReducers({
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export const Api: string = "https://music-app-backend-two.vercel.app/api/v1";
export const token: string = JSON.parse(
  localStorage.getItem("token") as string
);
