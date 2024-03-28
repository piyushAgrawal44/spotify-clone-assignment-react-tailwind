import axios from "axios";
import {
  loadAllUserFail,
  loadAllUserStart,
  loadAllUserSuccess,
  loadUserFail,
  loadUserStart,
  loadUserSuccess,
  loginFail,
  loginStart,
  loginSuccess,
  signUpFail,
  signUpStart,
  signUpSuccess,
} from "../reducers/authReducer";
import { Api, token } from "../store";

export const signUpApi =
  (firstName: string, lastName: string, email: string, password: string) =>
  async (dispatch: any) => {
    try {
      dispatch(signUpStart());
      const { data } = await axios.post(`${Api}/register`, {
        firstName,
        lastName,
        email,
        password,
      });

      dispatch(
        signUpSuccess({
          payload: data.message,
        })
      );
    } catch (error) {
      console.log(error);
      dispatch(signUpFail());
    }
  };
export const loginApi =
  (email: string, password: string) => async (dispatch: any) => {
    try {
      dispatch(loginStart());
      const { data } = await axios.post(`${Api}/login`, { email, password });
      localStorage.setItem("token", JSON.stringify(data.token));
      dispatch(loginSuccess(data.token));
    } catch (error) {
      console.log(error);
      dispatch(loginFail());
    }
  };

export const loadUserApi = () => async (dispatch: any) => {
  try {
    dispatch(loadUserStart());
    const { data } = await axios.get(`${Api}/me`, {
      headers: {
        Authorization: token,
      },
    });

    dispatch(loadUserSuccess(data.user));
  } catch (error) {
    console.log(error);
    dispatch(loadUserFail());
  }
};
export const loadAllUserApi =
  (search?: string, limit?: number, page?: number) => async (dispatch: any) => {
    try {
      dispatch(loadAllUserStart());
      const params: string = search
        ? `${Api}/all-users?search=${search}&limit=${limit}&page=${page}`
        : `${Api}/all-users?limit=${limit}&page=${page}`;
      const { data } = await axios.get(params, {
        headers: {
          Authorization: token,
        },
      });

      dispatch(loadAllUserSuccess(data.allUser));
    } catch (error) {
      console.log(error);
      dispatch(loadAllUserFail());
    }
  };
