import React from 'react';
import { connect } from 'react-redux';
import {
  tableSort,
  toggleIsFetching,
  updateTaskText,
  updateTaskStatus,
  getTasksWithSort,
  postTaskStatus,
  postTaskText,
} from '../../Redux/Actions/tasksActions';
import ContainerFetching from './ContainerFetching';

class TableContainer extends React.Component {
  componentDidMount() {
    this.props.getTasksWithSort([this.props.currentPage, , ]);
    if (this.props.errorStatus) {
      alert('Ошибка. Свяжитесь с администратором');
    }
  }

  onSortTable = (event) => {
    const sortField = event.target.id;
    const firstActiveTh = document.getElementsByClassName('active_col')[0];

    if (firstActiveTh) { firstActiveTh.classList.remove('active_col'); }

    document.getElementById(sortField).classList.add('active_col');

    // TODO: KISS
    const wasSortDirectionAsc = document.getElementById('table').classList.contains('sort_asc');
    let sortDirection = '';
    wasSortDirectionAsc ? sortDirection = 'desc' : sortDirection = 'asc';

    this.props.tableSort(sortField, sortDirection);

    // TODO: we need to use Flux here. Data from state only (this.props.sortField, this.props.sortDirection)
    this.props.getTasksWithSort(this.props.currentPage, sortField, sortDirection);
    if (this.props.errorStatus) {
      alert('Ошибка. Свяжитесь с администратором'); // eslint-disable-line no-alert
    }
  };

  onStatusChange = (event) => {
    const id = +(event.target.id).replace('exampleRadios', '');
    const isChecked = document.getElementById(event.target.id).hasAttribute('checked');
    let status = '';
    let taskIndex = '';

    isChecked ? status = 0 : status = 10;

    this.props.postTaskStatus([id, status]);

    if (!this.props.errorStatus) {
      isChecked ? (event.target).removeAttribute('checked') : (event.target).setAttribute('checked', 'checked');

      this.props.tasks.map((task, index) => ((+task.id === id) && (taskIndex = index)));
      this.props.updateTaskStatus(status, taskIndex);
    } else {
      alert('Ошибка отправки. Свяжитесь с администратором'); // eslint-disable-line no-alert
    }
  };

  onTextChangeLocal = (event) => {
    const text = event.target.value;
    const id = +event.target.id;
    let taskIndex = '';

    const button = event.target.nextElementSibling;
    button.classList.remove('d-none');

    this.props.tasks.map((task, index) => ((+task.id === id) && (taskIndex = index)));
    this.props.updateTaskText(text, taskIndex);
  };

  taskTextSend = (event) => {
    const id = +event.target.previousElementSibling.id;
    let text = '';
    const button = event.target;

    this.props.tasks.map((task) => (id === task.id) ? text = task.text : '');
    this.props.postTaskText([id, text]);

    if (!this.props.errorStatus) {
      this.props.toggleIsFetching(true);
      button.classList.add('d-none');
    } else {
      alert('Ошибка отправки. Свяжитесь с администратором'); // eslint-disable-line no-alert
    }
  };

  render() {
    return (
      <ContainerFetching
        tasks             = {this.props.tasks}
        sortDirection     = {this.props.sortDirection}
        sortField         = {this.props.sortField}
        tableSort         = {this.props.tableSort}
        isFetching        = {this.props.isFetching}
        tableHeaders      = {this.props.tableHeaders}
        tableCells        = {this.props.table_cells}
        login             = {this.props.login}
        updateTaskStatus  = {this.props.updateTaskStatus}
        updateTaskText    = {this.props.updateTaskText}
        onSortTable       = {this.onSortTable}
        onStatusChange    = {this.onStatusChange}
        onTextChangeLocal = {this.onTextChangeLocal}
        taskTextSend      = {this.taskTextSend}
      />
    );
  }
}

const mapStateToProps = state => ({
  tasks:         state.tasks.message.tasks,
  errorStatus:   state.tasks.hasError,
  tasksCountAll: state.tasks.message.total_task_count,
  tableHeaders:  state.tasks.table.table_headers,
  tableCells:    state.tasks.table.table_cells,
  sortField:     state.tasks.table.sortField,
  sortDirection: state.tasks.table.sortDirection,
  isFetching:    state.tasks.isFetching,
  currentPage:   state.tasks.currentPage,
  login:         state.users.loggedUser,
});

export default connect(mapStateToProps, {// mapDispatchToProps
  tableSort,
  toggleIsFetching,
  updateTaskText,
  updateTaskStatus,
  getTasksWithSort,
  postTaskStatus,
  postTaskText,
})(TableContainer);
