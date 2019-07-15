import React from 'react';
import { connect } from 'react-redux';
import {
  setCurrentPage,
  updateTotalTaskCount,
  toggleIsFetching,
  setTasks,
  getURL,
} from '../../../Redux/Actions/tasksActions';
import Pager from './Pager';

class PagerContainer extends React.Component {
  isPagination = (event) => {
    const pageNumber        = event.target.getAttribute('value');
    const { sortField }     = this.props; // id | username | email | status
    const { sortDirection } = this.props; // asc | desc
    const { setCurrentPage: setCurrentPageA } = this.props;

    setCurrentPageA(pageNumber);
    this.props.getURL(pageNumber, sortField, sortDirection);
    if (!this.props.errorStatus) {
      setCurrentPageA(pageNumber);
    } else {
      alert('Ошибка. Свяжитесь с администратором'); // eslint-disable-line no-alert
    }
  };

  render() {
    return (
      <Pager
        currentPage       = {this.props.currentPage}
        tasksCountAll     = {this.props.tasksCountAll}
        setCurrentPage    = {this.props.setCurrentPage}
        toggleIsFetching  = {this.props.toggleIsFetching}
        setTasks          = {this.props.setTasks}
        isPagination      = {this.isPagination}
      />
    );
  }
}

const mapStateToProps = state => ({
  currentPage:   state.tasks.currentPage,
  sortField:     state.tasks.table.sortField,
  sortDirection: state.tasks.table.sortDirection,
  tasksCountAll: state.tasks.message.total_task_count,
  isFetching:    state.tasks.isFetching,
});

export default connect(mapStateToProps, {// mapDispatchToProps
  setCurrentPage,
  updateTotalTaskCount,
  toggleIsFetching,
  setTasks,
  getURL,
})(PagerContainer);
