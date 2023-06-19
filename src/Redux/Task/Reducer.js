/* eslint-disable prettier/prettier */
import {
  CREATE_TASK_FAILURE,
  CREATE_TASK_REQUEST,
  CREATE_TASK_SUCCESS,
  DELETE_TASK_FAILURE,
  DELETE_TASK_REQUEST,
  DELETE_TASK_SUCCESS,
  GET_ALL_TASKS_FAILURE,
  GET_ALL_TASKS_REQUEST,
  GET_ALL_TASKS_SUCCESS,
  GET_COMPLETED_TASKS_SUCCESS,
  GET_TODAYS_TASKS_SUCCESS,
  UPDATE_TASK_STATUS_FAILURE,
  UPDATE_TASK_STATUS_REQUEST,
  UPDATE_TASK_STATUS_SUCCESS,
} from './ActionType';


const initialState = {
  loading: false,
  tasks: [],
  error: null,
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TASK_REQUEST:
    case GET_ALL_TASKS_REQUEST:
    case DELETE_TASK_REQUEST:
    case UPDATE_TASK_STATUS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CREATE_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        tasks: [...state.tasks, action.payload],
        todaysTasks:[...state.todaysTasks,action.payload],
        error: null,
      };
    case GET_ALL_TASKS_SUCCESS:
      return {
        ...state,
        loading: false,
        tasks: action.payload,
        error: null,
      };
    case DELETE_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        tasks: state.tasks.filter(task => task.id !== action.payload),
        todaysTasks:state.todaysTasks.filter(task=>task.id!==action.payload),
        error: null,
      };
    case UPDATE_TASK_STATUS_SUCCESS:
      return {
        ...state,
        loading: false,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id ? action.payload : task,
        ),
        todaysTasks: state.todaysTasks.map(task =>
          task.id === action.payload.id ? action.payload : task,
        ),
        
        error: null,
      };
    case CREATE_TASK_FAILURE:
    case GET_ALL_TASKS_FAILURE:
    case DELETE_TASK_FAILURE:
    case UPDATE_TASK_STATUS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      case
       GET_COMPLETED_TASKS_SUCCESS:
        return {
          ...state,
          loading:false,
          completedTasks:action.payload,
        };
        case GET_TODAYS_TASKS_SUCCESS:
          return {
            ...state,
            loading:false,
            todaysTasks:action.payload,
          };
    default:
      return state;
  }
};

export default taskReducer;
