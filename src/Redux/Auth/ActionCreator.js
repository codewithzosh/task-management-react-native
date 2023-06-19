/* eslint-disable prettier/prettier */
// authActions.js
import {
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAILURE,
  UPDATE_USER_PROFILE_SUCCESS,
  UPDATE_USER_PROFILE_FAILURE,
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,
} from './ActionType';

// signup user
export const signupSuccess = (jwt, status) => {
  return {
    type: SIGNUP_SUCCESS,
    payload: {jwt, status},
  };
};

export const signupFailure = error => {
  return {
    type: SIGNUP_FAILURE,
    payload: error,
  };
};

// signin user
export const signinSuccess = (jwt, status) => {
  return {
    type: SIGNIN_SUCCESS,
    payload: {jwt, status},
  };
};

export const signinFailure = error => {
  return {
    type: SIGNIN_FAILURE,
    payload: error,
  };
};

// get user profile
export const getUserProfileSuccess = profile => {
  return {
    type: GET_USER_PROFILE_SUCCESS,
    payload: profile,
  };
};

export const getUserProfileFailure = error => {
  return {
    type: GET_USER_PROFILE_FAILURE,
    payload: error,
  };
};

//  update user
export const updateUserProfileSuccess = profile => {
  return {
    type: UPDATE_USER_PROFILE_SUCCESS,
    payload: profile,
  };
};

export const updateUserProfileFailure = error => {
  return {
    type: UPDATE_USER_PROFILE_FAILURE,
    payload: error,
  };
};
