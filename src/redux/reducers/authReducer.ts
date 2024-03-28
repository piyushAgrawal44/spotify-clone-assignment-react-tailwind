import { createSlice } from "@reduxjs/toolkit";

export interface User {
  profilePicture: {
    public_id: string | null;
    url: string | null;
  };
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  follower: string[];
  following: string[];
  visited: string[];
  createdAt: string;
  updatedAt: string;
  albumCreation: Array<{
    albumImage: {
      public_id: string | null;
      url: string | null;
    };
    albumName: string;
    uploadedSongs: string[];
    _id: string;
  }>;
}

export interface AuthPayload {
  loading: boolean;
  isAuthenticated: boolean;
  token: string;
  user: User | null;
  allUsers: User[];
  message: string | null;
}

const initialState: AuthPayload = {
  loading: false,
  isAuthenticated: false,
  token: "",
  user: null,
  allUsers: [],
  message: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // sign up
    signUpStart(state) {
      state.loading = true;
      // state.message = null;
      state.isAuthenticated = false;
    },
    signUpSuccess(state, action) {
      state.loading = false;
      state.message = action.payload;
      state.isAuthenticated = true;
    },
    signUpFail(state) {
      state.loading = false;
      // state.message = null;
      state.isAuthenticated = false;
    },
    // login
    loginStart(state) {
      state.loading = true;
      // state.message = null;
      state.isAuthenticated = false;
    },
    loginSuccess(state, action) {
      state.loading = false;
      state.token = action.payload;
      state.isAuthenticated = true;
    },
    loginFail(state) {
      state.loading = false;
      // state.message = null;
      state.isAuthenticated = false;
    },
    // loadUser
    loadUserStart(state) {
      state.loading = true;
      // state.message = null;
      state.isAuthenticated = false;
    },
    loadUserSuccess(state, action) {
      state.loading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    loadUserFail(state) {
      state.loading = false;
      // state.message = null;
      state.isAuthenticated = false;
    },
    // loadAllUser
    loadAllUserStart(state) {
      state.loading = true;
      state.allUsers = [];
      // state.message = null;
    },
    loadAllUserSuccess(state, action) {
      state.loading = false;
      state.allUsers = action.payload;
    },
    loadAllUserFail(state) {
      state.loading = false;
      state.allUsers = [];
      // state.message = null;
    },
  },
});

export const {
  signUpStart,
  signUpSuccess,
  signUpFail,
  loginStart,
  loginSuccess,
  loginFail,
  loadUserStart,
  loadUserSuccess,
  loadUserFail,
  loadAllUserStart,
  loadAllUserSuccess,
  loadAllUserFail,
} = authSlice.actions;

export default authSlice.reducer;
