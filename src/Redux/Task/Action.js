/* eslint-disable prettier/prettier */
import {getData} from '../../config/AsyncStorage';
import {api} from '../../config/api';
import {
  createTaskFailure,
  createTaskRequest,
  createTaskSuccess,
  deleteTaskFailure,
  deleteTaskRequest,
  deleteTaskSuccess,
  getAllTasksFailure,
  getAllTasksRequest,
  getAllTasksSuccess,
  updateTaskStatusFailure,
  updateTaskStatusRequest,
  updateTaskStatusSuccess,
} from './ActionCreator';
import { GET_COMPLETED_TASKS_SUCCESS, GET_TODAYS_TASKS_SUCCESS } from './ActionType';

export const createTask = taskData => {
  return async dispatch => {
    dispatch(createTaskRequest());

    try {
      const jwt = await getData('jwt');
      if (jwt) {
        api.defaults.headers.common.Authorization = `Bearer ${jwt}`;
      }

      const response = await api.post('/api/tasks/create', taskData);

      const createdTask = response.data;
console.log("created task",createdTask);
      dispatch(createTaskSuccess(createdTask));
    } catch (error) {
      dispatch(createTaskFailure(error));
    }
  };
};

export const getTodaysTasks = (priority) => {
  return async dispatch => {
    dispatch(getAllTasksRequest());

    try {
      const jwt = await getData('jwt');
      if (jwt) {
        api.defaults.headers.common.Authorization = `Bearer ${jwt}`;
      }

      const response = await api.get(`/api/tasks?&today=true&${priority}`,);

      const tasks = response.data;

      dispatch({type:GET_TODAYS_TASKS_SUCCESS,payload:tasks});
    } catch (error) {
      console.log("error",error);
    }
  };
};

export const getAllTasks = (param) => {
  return async dispatch => {
    dispatch(getAllTasksRequest());

    try {
      const jwt = await getData('jwt');
      if (jwt) {
        api.defaults.headers.common.Authorization = `Bearer ${jwt}`;
      }

      const response = await api.get(`/api/tasks`,);

      const tasks = response.data;

      dispatch(getAllTasksSuccess(tasks));
    } catch (error) {
      dispatch(getAllTasksFailure(error));
    }
  };
};

export const getCompletedTasks = (status) => {
  return async dispatch => {

    try {
      const jwt = await getData('jwt');
      if (jwt) {
        api.defaults.headers.common.Authorization = `Bearer ${jwt}`;
      }

      const response = await api.get(`/api/tasks?status=COMPLETED`,);

      const tasks = response.data;
      console.log("completed task ",tasks)

      dispatch({type:GET_COMPLETED_TASKS_SUCCESS,payload:tasks});
    } catch (error) {
      console.log("error",error)
    }
  };
};

export const deleteTask = taskId => {
  return async dispatch => {
    dispatch(deleteTaskRequest());

    try {
      const jwt = await getData('jwt');
      if (jwt) {
        api.defaults.headers.common.Authorization = `Bearer ${jwt}`;
      }

      const res=await api.delete(`/api/tasks/delete/${taskId}`);
      console.log("deleted task", res.data)

      dispatch(deleteTaskSuccess(taskId));
    } catch (error) {
      console.log("catch error ",error,"--- task id --- ",taskId)
      dispatch(deleteTaskFailure(error));
    }
  };
};

export const updateTaskStatus = (taskId, newStatus) => {
  return async dispatch => {
    dispatch(updateTaskStatusRequest());

    try {
      const jwt = await getData('jwt');
      if (jwt) {
        api.defaults.headers.common.Authorization = `Bearer ${jwt}`;
      }

      const response = await api.put(`/api/tasks/update/${taskId}`, {
        status: newStatus,
      });

      const updatedTask = response.data;
      console.log("updated task",updatedTask)

      dispatch(updateTaskStatusSuccess(updatedTask));
    } catch (error) {
      dispatch(updateTaskStatusFailure(error));
    }
  };
};
