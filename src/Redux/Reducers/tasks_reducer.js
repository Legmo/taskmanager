import {
  ADD_TASK,
  CLEAR_NEW_TASK,
  UPDATE_NEW_TASK_TEXT,
  UPDATE_TASK_TEXT,
  UPDATE_AUTHOR_TEXT,
  UPDATE_MAIL_TEXT,
  UPDATE_TASK_STATUS,
  TABLE_SORT,
  SET_TASKS,
  TOGGLE_IS_FETCHING,
  UPDATE_CURRENT_PAGE,
  UPDATE_TOTAL_TASK_COUNT
} from '../Actions/tasks_actions'
import _ from "lodash";

const initialState = {
    message: {
      tasks: [],
      total_task_count: ""
    },
    table_headers: [
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
    newTask: {
      text: "",
      author: "",
      mail: "",
    },
    sortField: "id",
    sortDirection: "asc",
    currentPage: 1,
    isFetching: false,
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
        newTask: {...newElement},
        newTaskText: "",
        newMailText: "",
        newAuthorText: "",
      };
    }
    case CLEAR_NEW_TASK: {
      return {
        ...state,
        newTask: {
          text: "",
          author: "",
          mail: "",
        },
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

      let newString = action.newTaskText;
      let taskId = +action.taskId;
      stateCopy.message.tasks.map((task) => {
        +task.id === taskId && (task.text = newString);
      })

      return stateCopy;
    }
    case UPDATE_NEW_TASK_TEXT: {
      return {
        ...state,
        newTask: {
          ...state.newTask,
          text: action.newTaskText,
        },
      };
    }
    case UPDATE_AUTHOR_TEXT: {
      return {
        ...state,
        newTask: {
          ...state.newTask,
          author: action.newAuthorText,
        },
      };
    }
    case UPDATE_MAIL_TEXT: {
      return {
        ...state,
        newTask: {
          ...state.newTask,
          mail: action.newMailText,
        },
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

      let newStatus = action.newStatus;
      let taskId = +action.taskId;
      stateCopy.message.tasks.map((task) => {
         +task.id === taskId && (task.status = newStatus);
      })

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
        sortDirection: action.sortDirection,
      };

    //If we need to sort this page only - use lodash. Without all tasks sorting & page reload.
    /*
      stateCopy.message.tasks = _.orderBy(
          stateCopy.message.tasks,
          stateCopy.sortField,
          stateCopy.sortDirection
      );
    */
      return stateCopy;
    }
    case SET_TASKS: {
      return {
        ...state,
        message: {
          ...state.message,
          tasks: action.tasks,
        },
      };
    }
    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    case UPDATE_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.pageNumber,
      };
    }
    case UPDATE_TOTAL_TASK_COUNT: {
      return {
        ...state,
        message: {
          ...state.message,
          tasks: [...state.message.tasks],
          total_task_count: action.taskCount
        },
      };
    }
    default:
      return state;
  }
}

export default tasks_reducer;