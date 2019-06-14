import React from 'react';
import {connect} from "react-redux";
import {
  setCurrentPage,
  updateTotalTaskCount,
  toggleIsFetching,
  setTasks,
  getURL,
} from "../../../Redux/Actions/tasks_actions";
import Pager from "./Pager";


class PagerContainer extends React.Component {

  isPagination = (event) => {
    let pageNumber    = event.target.getAttribute('value');
    let sortField     = this.props.sortField //id | username | email | status
    let sortDirection = this.props.sortDirection //asc | desc

    this.props.setCurrentPage(pageNumber);
    this.props.getURL(pageNumber, sortField, sortDirection)
    if(!this.props.errorStatus) {
      this.props.setCurrentPage(pageNumber)
    }
    else {
      alert('Ошибка. Свяжитесь с администратором')
    }
  }

  render() {
    return <Pager
      currentPage       = {this.props.currentPage}
      tasksCountAll     = {this.props.tasksCountAll}
      setCurrentPage    = {this.props.setCurrentPage}
      toggleIsFetching  = {this.props.toggleIsFetching}
      setTasks          = {this.props.setTasks}
      isPagination      = {this.isPagination}
    />
  }
}

let mapStateToProps = (state) => {
  return {
    currentPage:    state.tasks.currentPage,
    sortField:      state.tasks.table.sortField,
    sortDirection:  state.tasks.table.sortDirection,
    tasksCountAll:  state.tasks.message.total_task_count,
    isFetching:     state.tasks.isFetching
  }
}

export default connect(mapStateToProps, {//mapDispatchToProps
  setCurrentPage,
  updateTotalTaskCount,
  toggleIsFetching,
  setTasks,
  getURL,
})(PagerContainer);