/* eslint-disable prettier/prettier */
const {storeData, getData} = require('../../config/AsyncStorage');
import axios from 'axios';
import { LOGOUT_SUCCESS } from './ActionType';
const {api} = require('../../config/api');
const {
  signupSuccess,
  signupFailure,
  getUserProfileSuccess,
  getUserProfileFailure,
  updateUserProfileSuccess,
  updateUserProfileFailure,
  signinSuccess,
  signinFailure,
} = require('./ActionCreator');

export const signUpUser = reqData => {
  return async dispatch => {
    try {
      // const response = await api.post('/auth/signup', reqData);

      const response = await axios.post('http://172.26.208.1:5454/auth/signup', reqData)
      // const resData = a;

      const {jwt, status} = response.data;

      // const {jwt, status} = await response.data;

      await storeData('jwt', jwt);
      console.log('JWT stored in AsyncStorage.');

      dispatch(signupSuccess(jwt, status));
      console.log('User signed up successfully.', jwt);
    } catch (error) {
      console.error('Error signing up user:', error);
      dispatch(signupFailure(error));
    }
  };
};

export const getUserProfile = () => {
  return async dispatch => {
    try {
      const products = await axios.get(
        'https://fakestoreapi.com/products',
      );
  
      console.log('products ', products.data);

      const jwt = await getData('jwt');

      console.log("token from async storage ",jwt);
      
      if (jwt) {
        api.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;

        const response = await api.get('/api/users/profile');
        const userProfile = response.data;

        dispatch(getUserProfileSuccess(userProfile));
        console.log('User profile retrieved successfully.', userProfile);
      }
    } catch (error) {
      console.error('Error retrieving user profile:', error);
      dispatch(getUserProfileFailure(error));
    }
  };
};

export const updateUserProfile = profileData => {
  return async dispatch => {
    try {
      const jwt = await getData('jwt');
      if (jwt) {
        api.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;

        const response = await api.put('/api/users/update', profileData);
        const updatedProfile = response.data;

        dispatch(updateUserProfileSuccess(updatedProfile));
        console.log('User profile updated successfully.');
      }
    } catch (error) {
      console.error('Error updating user profile:', error);
      dispatch(updateUserProfileFailure(error));
    }
  };
};

// singin user
export const signInUser = reqData => async dispatch => {
  try {
    // const products = await axios.get(
    //   'https://fakestoreapi.com/products',
    // );

    // console.log('products ', products.data);

    const response = await axios.post('http://172.26.208.1:5454/auth/signin', reqData);

    const {jwt, status} = response.data;

    await storeData('jwt', jwt);
    console.log('JWT stored in AsyncStorage.');

    dispatch(signinSuccess(jwt, status));
    console.log('User signed in successfully.', jwt);
  } catch (error) {
    console.error('Error signing in user:', error,reqData);
    dispatch(signinFailure(error));
  }
};

export const logoutUserAction = () => async dispatch => {
  
    dispatch({type:LOGOUT_SUCCESS});
    console.log('logout user');
  
};