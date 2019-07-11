import { tasksAPI, pagesAPI } from '../../API/api';

export const CLEAR_NEW_TASK          = 'CLEAR-NEW-TASK';
export const UPDATE_TASK_TEXT        = 'UPDATE-TASK-TEXT';
export const UPDATE_NEW_TASK_TEXT    = 'UPDATE-NEW-TASK-TEXT';
export const UPDATE_MAIL_TEXT        = 'UPDATE-NEW-MAIL-TEXT';
export const UPDATE_AUTHOR_TEXT      = 'UPDATE-NEW-AUTHOR-TEXT';
export const UPDATE_TASK_STATUS      = 'UPDATE-TASK-STATUS';
export const TABLE_SORT              = 'TABLE-SORT';
export const SET_TASKS               = 'SET-TASKS';
export const TOGGLE_IS_FETCHING      = 'TOGGLE-IS-FETCHING';
export const SET_ERROR_STATUS        = 'SET_ERROR-STATUS';
export const UPDATE_CURRENT_PAGE     = 'UPDATE-CURRENT-PAGE';
export const UPDATE_TOTAL_TASK_COUNT = 'UPDATE-TOTAL-TASK-COUNT';

export const clearNewTask = () => ({
  type: CLEAR_NEW_TASK,
});
export const updateTaskText = (text, index) => ({
  type: UPDATE_TASK_TEXT,
  newTaskText: text,
  taskIndex: index,
});
export const updateNewTaskText = text => ({
  type: UPDATE_NEW_TASK_TEXT,
  newTaskText: text,
});
export const updateMailText = mail => ({
  type: UPDATE_MAIL_TEXT,
  newMailText: mail,
});
export const updateAuthorText = name => ({
  type: UPDATE_AUTHOR_TEXT,
  newAuthorText: name,
});
export const updateTaskStatus = (status, index) => ({
  type: UPDATE_TASK_STATUS,
  newStatus: status,
  taskIndex: index,
});
export const tableSort = (sortField, sortDirection) => ({
  type: TABLE_SORT,
  sortField,
  sortDirection,
});
export const setTasks = tasks => ({
  type: SET_TASKS,
  tasks,
});
export const toggleIsFetching = isFetching => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const setCurrentPage = pageNumber => ({
  type: UPDATE_CURRENT_PAGE,
  pageNumber,
});
export const updateTotalTaskCount = taskCount => ({
  type: UPDATE_TOTAL_TASK_COUNT,
  taskCount,
});
export const setErrorStatus = status => ({
  type: SET_ERROR_STATUS,
  status,
});

// Thunks
export const getTasksWithSort = (currentPage, sortField, sortDirection) => (dispatch) => {
  dispatch(toggleIsFetching(true));

  tasksAPI.getTasksWithSort([currentPage, sortField, sortDirection])
    .then((data) => {
      dispatch(toggleIsFetching(false));
      if (data.status !== 'error') {
        dispatch(setErrorStatus(false));
        dispatch(updateTotalTaskCount(data.message.total_task_count));
        dispatch(setTasks(data.message.tasks));
      } else {
        dispatch(setErrorStatus(true));
      }
    });
};
export const postTaskStatus = ([id, status]) => (dispatch) => {
  dispatch(toggleIsFetching(true));
  tasksAPI.postTaskStatus([id, status])
    .then((response) => {
      dispatch(toggleIsFetching(false));
      if (response.data.status !== 'error') {
        dispatch(setErrorStatus(false));
      } else {
        dispatch(setErrorStatus(true));
      }
    });
};
export const postTaskText = ([id, text]) => (dispatch) => {
  dispatch(toggleIsFetching(true));
  tasksAPI.postTaskText([id, text])
    .then((response) => {
      dispatch(toggleIsFetching(false));
      if (response.data.status !== 'error') {
        dispatch(setErrorStatus(false));
      } else {
        dispatch(setErrorStatus(true));
      }
    });
};
export const postNewTask = ([username, email, text]) => (dispatch) => {
  dispatch(toggleIsFetching(true));
  tasksAPI.postNewTask([username, email, text])
    .then((response) => {
      dispatch(toggleIsFetching(false));
      if (response.data.status !== 'error') {
        dispatch(setErrorStatus(false));
      } else {
        dispatch(setErrorStatus(true));
      }
    });
};
export const getURL = (pageNumber, sortField, sortDirection) => (dispatch) => {
  dispatch(toggleIsFetching(true));
  pagesAPI.getURL(pageNumber, sortField, sortDirection)
    .then((response) => {
      dispatch(toggleIsFetching(false));
      if (response.data.status !== 'error') {
        dispatch(setErrorStatus(false));
        dispatch(setTasks(response.data.message.tasks));
      } else {
        dispatch(setErrorStatus(true));
      }
    });
};
