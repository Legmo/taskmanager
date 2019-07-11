import {
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
  UPDATE_TOTAL_TASK_COUNT,
} from '../Actions/tasksActions';
// import _ from "lodash";

const initialState = {
  message: {
    tasks: [],
    total_task_count: '',
  },
  newTask: {
    text: '',
    author: '',
    mail: '',
  },
  table: {
    table_headers: [
      {
        header_id: 'id',
        header_name: 'ID',
        allowed_users: [
          'anonymous',
          'admin',
        ],
      },
      {
        header_id: 'username',
        header_name: 'Пользователь',
        allowed_users: [
          'anonymous',
          'admin',
        ],
      },
      {
        header_id: 'email',
        header_name: 'Email',
        allowed_users: [
          'anonymous',
          'admin',
        ],
      },
      {
        header_id: 'text',
        header_name: 'Задача',
        allowed_users: [
          'anonymous',
          'admin',
        ],
      },
      {
        header_id: 'status',
        header_name: 'Статус',
        allowed_users: [
          'anonymous',
          'admin',
        ],
      },
    ],
    table_cells: [
      {
        cell_id: 'id',
        cell_type: 'integer',
        allowed_users: [
          'anonymous',
          'admin',
        ],
      },
      {
        cell_id: 'username',
        cell_type: 'text',
        allowed_users: [
          'anonymous',
          'admin',
        ],
      },
      {
        cell_id: 'email',
        cell_type: 'text',
        allowed_users: [
          'anonymous',
          'admin',
        ],
      },
      {
        cell_id: 'text_anonymous',
        cell_type: 'text',
        allowed_users: [
          'anonymous',
        ],
      },
      {
        cell_id: 'text_admin',
        cell_type: 'textarea',
        allowed_users: [
          'admin',
        ],
      },
      {
        cell_id: 'status_anonymous',
        cell_type: 'text',
        allowed_users: [
          'anonymous',
        ],
      },
      {
        cell_id: 'status_admin',
        cell_type: 'radio-button',
        allowed_users: [
          'admin',
        ],
      },
    ],
    sortField: 'id',
    sortDirection: 'asc',
  },
  currentPage: 1,
  isFetching: false,
  hasError: false,
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_NEW_TASK: {
      return {
        ...state,
        newTask: {
          text: '',
          author: '',
          mail: '',
        },
      };
    }
    case UPDATE_TASK_TEXT: {
      const { taskIndex } = action;
      const { newTaskText } = action;
      const stateCopy = {
        ...state,
        message: {
          ...state.message,
          tasks: [...state.message.tasks],
        },
      };
      stateCopy.message.tasks[taskIndex].text = newTaskText;

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
      const { newStatus } = action;
      const { taskIndex } = action;
      const stateCopy = {
        ...state,
        message: {
          ...state.message,
          tasks: [...state.message.tasks],
        },
      };
      stateCopy.message.tasks[taskIndex].status = newStatus;

      return stateCopy;
    }
    case TABLE_SORT: {
      return {
        ...state,
        message: {
          ...state.message,
          tasks: [...state.message.tasks],
        },
        table: {
          ...state.table,
          sortField: action.sortField,
          sortDirection: action.sortDirection,
        },
      };

      /* If we need to sort this page only - use lodash. Without all tasks sorting & page reload.
        stateCopy.message.tasks = _.orderBy(
            stateCopy.message.tasks,
            stateCopy.sortField,
            stateCopy.sortDirection
        );
      */
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
          total_task_count: action.taskCount,
        },
      };
    }
    default:
      return state;
  }
};

export default tasksReducer;
