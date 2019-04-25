import {
  ADD_TASK,
  UPDATE_NEW_TASK_TEXT,
  UPDATE_TASK_TEXT,
  UPDATE_AUTHOR_TEXT,
  UPDATE_MAIL_TEXT,
  UPDATE_TASK_STATUS,
  TABLE_SORT,
} from '../Actions/tasks_actions'
import _ from "lodash";


const initialState = {
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
};

const tasks_reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TASK: {
      let newElement = {
        id: "",
        username: _.escape(state.newAuthorText),
        email: state.newMailText,
        text: _.escape(state.newTaskText),
        status: 0,
      };
      return {
        ...state,
        new_task: {...newElement},
        newTaskText: "",
        newMailText: "",
        newAuthorText: "",
      };
    }
    case UPDATE_TASK_TEXT: {
      let stateCopy = {
        ...state,
        message: {
          ...state.message,
          tasks : [...state.message.tasks],
        },
      };

      //ToDo: FIX IT!!!!
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

      return stateCopy;
    }
    case UPDATE_NEW_TASK_TEXT: {
      return {
        ...state,
        message: {
          ...state.message,
          tasks: [...state.message.tasks],
        },
        newTaskText: action.newTaskText,
      };
    }
    case UPDATE_MAIL_TEXT: {
      return {
        ...state,
        newMailText: action.newMailText,
      };
    }
    case UPDATE_AUTHOR_TEXT: {
      return {
        ...state,
        newAuthorText: action.newAuthorText,
      };
    }
    case UPDATE_TASK_STATUS: {
      let stateCopy = {
        ...state,
        message: {
          ...state.message,
          tasks : [...state.message.tasks],
        },
      };

      //ToDo: FIX IT!!!!
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
    }
    case TABLE_SORT: {
      let stateCopy = {
        ...state,
        message: {
          ...state.message,
          tasks : [...state.message.tasks],
        },
        sortField: action.sortField,
      };

      if (action.sortField === state.sortField) {
        if (stateCopy.sortDirection === 'asc') {
          stateCopy.sortDirection = 'desc';
        }
        else {
          stateCopy.sortDirection = 'asc';
        }
      }

      stateCopy.message.tasks = _.orderBy(
          stateCopy.message.tasks,
          stateCopy.sortField,
          stateCopy.sortDirection
      );
      return stateCopy;
    }
    default:
      return state;
  }
}

export default tasks_reducer;