export const ADD_TASK =                'ADD-TASK';
export const UPDATE_TASK_TEXT =        'UPDATE-TASK-TEXT';
export const UPDATE_NEW_TASK_TEXT =    'UPDATE-NEW-TASK-TEXT';
export const UPDATE_MAIL_TEXT =        'UPDATE-NEW-MAIL-TEXT';
export const UPDATE_AUTHOR_TEXT =      'UPDATE-NEW-AUTHOR-TEXT';
export const UPDATE_TASK_STATUS =      'UPDATE-TASK-STATUS';
export const TABLE_SORT =              'TABLE-SORT';
export const SET_TASKS =               'SET-TASKS';

export const addTask = () => ({
  type: ADD_TASK,
});
export const updateTaskText = (text, id) => ({
  type: UPDATE_TASK_TEXT,
  newTaskText: text,
  taskId: id,
});
export const updateNewTaskText = (text) => ({
  type: UPDATE_NEW_TASK_TEXT,
  newTaskText: text,
});
export const updateMailText = (mail) => ({
  type: UPDATE_MAIL_TEXT,
  newMailText: mail,
});
export const updateAuthorText = (name) => ({
  type: UPDATE_AUTHOR_TEXT,
  newAuthorText: name,
});
export const updateTaskStatus = (status, id) => ({
  type: UPDATE_TASK_STATUS,
  newStatus: status,
  taskId: id,
});
export const tableSort = (sort_field) => ({
  type: TABLE_SORT,
  sortField: sort_field,
});
export const setTasks = (tasks) => ({
  type: SET_TASKS,
  tasks: tasks,
});

