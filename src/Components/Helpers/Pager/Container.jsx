import React from 'react';
import {connect} from "react-redux";
import * as axios from "axios";
import {
  setCurrentPage,
  updateTotalTaskCount,
  toggleIsFetching,
  setTasks,
} from "../../../Redux/Actions/tasks_actions";
import Pager from "./Pager";


class PagerContainer extends React.Component {

  isPagination = (event) => {
    let pageNumber = event.target.getAttribute('value');
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    axios.get(`https://uxcandy.com/~shapoval/test-task-backend/?developer=Name&page=${pageNumber}`)
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setCurrentPage(pageNumber)
        this.props.setTasks(response.data.message.tasks)
    });
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
    tasksCountAll:  state.tasks.message.total_task_count,
    isFetching:     state.tasks.isFetching
  }
}

export default connect(mapStateToProps, {//mapDispatchToProps
  setCurrentPage,
  updateTotalTaskCount,
  toggleIsFetching,
  setTasks,
})(PagerContainer);