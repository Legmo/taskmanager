/*
import _ from 'lodash';

const ADD_TASK =                'ADD-TASK';
const UPDATE_TASK_TEXT =        'UPDATE-TASK-TEXT';
const UPDATE_NEW_TASK_TEXT =    'UPDATE-NEW-TASK-TEXT';
const UPDATE_MAIL_TEXT =        'UPDATE-NEW-MAIL-TEXT';
const UPDATE_AUTHOR_TEXT =      'UPDATE-NEW-AUTHOR-TEXT';
const UPDATE_TASK_STATUS =      'UPDATE-TASK-STATUS';
const TABLE_SORT =              'TABLE-SORT';
const IS_PAGINATION =           'IS-PAGINATION';
const IS_LOGOUT =               'IS-LOGOUT';
const IS_LOGIN =                'IS-LOGIN';
const REDIRECT_TO_ADMIN =       'REDIRECT-TO-ADMIN';


let initialState = {
  "message": {
    "tasks": [
      {
        "id": 1,
        "username": "Test User",
        "email": "test_user_1@example.com",
        "text": "Hello, world!",
        "status": 10,
      },
      {
        "id": 31,
        "username": "A Test User 2",
        "email": "test_user_2@example.com",
        "text": "Hello from user 2!",
        "status": 0,
      },
      {
        "id": 4,
        "username": "Test User 3",
        "email": "test_user_3@example.com",
        "text": "Hello from user 3!",
        "status": 0,
      }
    ],
    "total_task_count": "579"
  },
  "new_task": {},
  newTaskText: "",
  newMailText: "",
  newAuthorText: "",
  loggedUser: false,
  "table_headers": [
    {
      "header_id":"id",
      "header_name":"ID"
    },
    {
      "header_id":"username",
      "header_name":"Пользователь"
    },
    {
      "header_id":"email",
      "header_name":"Email"
    },
    {
      "header_id":"text",
      "header_name":"Задача"
    },
    {
      "header_id":"status",
      "header_name":"Статус"
    },
  ],
  sortField: "id",
  sortDirection: "asc",
  actualPage: 1,
};

const adminLogin = "admin";
const adminPassword = "123";

const reducerTasks = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TASK:
      var newElement = {
        id: "",
        username : _.escape(state.newAuthorText),
        email : state.newMailText,
        text : _.escape(state.newTaskText),
        status : 0,
      };
      var stateCopy = {...state};
      stateCopy.message = {...state.message};
      stateCopy.message.tasks = {...state.message.tasks};

      stateCopy.new_task = {...newElement}
      stateCopy.newTaskText = "";
      stateCopy.newMailText = "";
      stateCopy.newAuthorText = "";

      console.log(stateCopy);

      return stateCopy;
    case UPDATE_TASK_TEXT: {
      let stateCopy = {...state};
      stateCopy.message = {...state.message};
      stateCopy.message.tasks_reduser = [...state.message.tasks];
      let newString = action.newTaskText;
      let taskId = action.taskId;

      if (stateCopy.message.tasks[0].id == taskId) {
        stateCopy.message.tasks[0].text = newString;
      }
      else if (stateCopy.message.tasks[1].id == taskId) {
        stateCopy.message.tasks[1].text = newString;
      }
      else {
        stateCopy.message.tasks[2].text = newString;
      }

      // console.log(stateCopy.message.tasks);
      stateCopy.message.tasks = stateCopy.message.tasks.map((el) => {
         if (el.id == taskId) {
           el.id = el.id;
           el.text = newString;
           el.username = el.username;
           el.email = el.email;
           el.status = el.status;
           console.log(el.text);
         } else {
           console.log('NOT');
           el.id = el.id;
           el.text = el.text;
           el.username = el.username;
           el.email = el.email;
           el.status = el.status;
           console.log(el.text);
         }
       })
      return stateCopy;
    }
    case UPDATE_NEW_TASK_TEXT: {
      let stateCopy = {...state};
      stateCopy.message = {...state.message};
      stateCopy.message.tasks_reduser = [...state.message.tasks];
      stateCopy.newTaskText = action.newTaskText;

      console.log('task: ' + stateCopy.newTaskText)

      return stateCopy;
    }
    case UPDATE_MAIL_TEXT:
      var stateCopy = {...state};
      stateCopy.newMailText = action.newMailText;

      console.log('mail: ' + stateCopy.newMailText)
      return stateCopy;
    case UPDATE_AUTHOR_TEXT:
      var stateCopy = {...state};
      stateCopy.newAuthorText = action.newAuthorText;

      console.log('name: ' + stateCopy.newAuthorText)
      return stateCopy;
    case UPDATE_TASK_STATUS:
      var stateCopy = {...state};
      stateCopy.message = {...state.message};
      stateCopy.message.tasks_reduser = [...state.message.tasks];

      let newStatus = action.newStatus;
      let taskId = action.taskId;

      if (stateCopy.message.tasks[0].id == taskId) {
        stateCopy.message.tasks[0].status = newStatus;
      }
      else if (stateCopy.message.tasks[1].id == taskId) {
        stateCopy.message.tasks[1].status = newStatus;
      }
      else {
        stateCopy.message.tasks[2].status = newStatus;
      }
      return stateCopy;
    case TABLE_SORT:
      var stateCopy = {...state};

      stateCopy.message = {...state.message};
      stateCopy.message.tasks_reduser = [...state.message.tasks];
      stateCopy.sortField = action.sortField;
      stateCopy.sortDirection = state.sortDirection;
      let isDirectionTheSame =  (stateCopy.sortField === state.sortField);

      if ((isDirectionTheSame) && (stateCopy.sortDirection === 'asc')) {
        stateCopy.sortDirection = 'desc';
      } else if ((isDirectionTheSame) && (stateCopy.sortDirection === 'desc')) {
        stateCopy.sortDirection = 'asc';
      }
      let orderedTasks = _.orderBy(stateCopy.message.tasks, stateCopy.sortField, stateCopy.sortDirection);

      stateCopy.message.tasks_reduser = orderedTasks;
      return stateCopy;
    case IS_PAGINATION:
      var stateCopy = {...state};
      return stateCopy;
    case IS_LOGOUT:
      var stateCopy = {...state};
      console.log('loggedUser: ' + action.loggedUser);
      stateCopy.loggedUser = action.loggedUser;
      return stateCopy;
    case IS_LOGIN:
      var stateCopy = {...state};
      if(
          (stateCopy.loggedUser == !true) &&
          (action.login == adminLogin) &&
          (action.password == adminPassword)
      ){
        stateCopy.loggedUser = true;
        // console.log('LOGGED! ' + stateCopy.loggedUser);
      }
      else {
        alert('Неверный логин или пароль');
      }
      return stateCopy;
    case REDIRECT_TO_ADMIN:
      var stateCopy = {...state};
      if (stateCopy.loggedUser == true) {
        console.log('Redirect ACTION');
        // return <Redirect to='/admin'/>
      }
      return stateCopy;
    default:
      return state;
  }
}

//ActionCreator's
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
export const isPagination = (inf) => ({
  type: IS_PAGINATION,
  inf: inf,
});
export const isLogout = (loginLogout) => ({
  type: IS_LOGOUT,
  loggedUser: loginLogout,
});
export const isLogin = (login, password) => ({
  type: IS_LOGIN,
  login: login,
  password: password,
});
export const redirectToAdmin = (login) => ({
  type: REDIRECT_TO_ADMIN,
  login: login,
});

export default reducerTasks;
*/
