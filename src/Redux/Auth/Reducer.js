/* eslint-disable prettier/prettier */
// authReducer.js
import {
  GET_USER_PROFILE_FAILURE,
  GET_USER_PROFILE_SUCCESS,
  LOGOUT_SUCCESS,
  SIGNIN_FAILURE,
  SIGNIN_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
  UPDATE_USER_PROFILE_FAILURE,
  UPDATE_USER_PROFILE_SUCCESS,
} from './ActionType';

const initialState = {
  jwt: null,
  status: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        jwt: action.payload.jwt,
        status: action.payload.status,
        error: null,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        jwt: null,
        status: null,
        error: action.payload,
      };
    case SIGNIN_SUCCESS:
      return {
        ...state,
        jwt: action.payload.jwt,
        status: action.payload.status,
        error: null,
      };
    case SIGNIN_FAILURE:
      return {
        ...state,
        jwt: null,
        status: null,
        error: action.payload,
      };
    case GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        userProfile: action.payload,
        error: null,
      };
    case GET_USER_PROFILE_FAILURE:
      return {
        ...state,
        userProfile: null,
        error: action.payload,
      };
    case UPDATE_USER_PROFILE_SUCCESS:
      return {
        ...state,
        userProfile: action.payload,
        error: null,
      };
    case UPDATE_USER_PROFILE_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case LOGOUT_SUCCESS:
      return {
        userProfile: null,
      };
    default:
      return state;
  }
};

export default authReducer;
