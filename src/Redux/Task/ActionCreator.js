/* eslint-disable prettier/prettier */
// taskActions.js
import {
  CREATE_TASK_REQUEST,
  CREATE_TASK_SUCCESS,
  CREATE_TASK_FAILURE,
  GET_ALL_TASKS_FAILURE,
  GET_ALL_TASKS_SUCCESS,
  GET_ALL_TASKS_REQUEST,
  DELETE_TASK_REQUEST,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_FAILURE,
  UPDATE_TASK_STATUS_REQUEST,
  UPDATE_TASK_STATUS_SUCCESS,
  UPDATE_TASK_STATUS_FAILURE,
} from './ActionType';

export const createTaskRequest = () => {
  return {
    type: CREATE_TASK_REQUEST,
  };
};

export const createTaskSuccess = task => {
  return {
    type: CREATE_TASK_SUCCESS,
    payload: task,
  };
};

export const createTaskFailure = error => {
  return {
    type: CREATE_TASK_FAILURE,
    payload: error,
  };
};

// get all task

export const getAllTasksRequest = () => {
  return {
    type: GET_ALL_TASKS_REQUEST,
  };
};

export const getAllTasksSuccess = tasks => {
  return {
    type: GET_ALL_TASKS_SUCCESS,
    payload: tasks,
  };
};

export const getAllTasksFailure = error => {
  return {
    type: GET_ALL_TASKS_FAILURE,
    payload: error,
  };
};

// delete task

export const deleteTaskRequest = () => {
  return {
    type: DELETE_TASK_REQUEST,
  };
};

export const deleteTaskSuccess = taskId => {
  return {
    type: DELETE_TASK_SUCCESS,
    payload: taskId,
  };
};

export const deleteTaskFailure = error => {
  return {
    type: DELETE_TASK_FAILURE,
    payload: error,
  };
};


// update task status

export const updateTaskStatusRequest = () => {
  return {
    type: UPDATE_TASK_STATUS_REQUEST
  };
};

export const updateTaskStatusSuccess = task => {
  return {
    type: UPDATE_TASK_STATUS_SUCCESS,
    payload: task
  };
};

export const updateTaskStatusFailure = error => {
  return {
    type: UPDATE_TASK_STATUS_FAILURE,
    payload: error
  };
};
