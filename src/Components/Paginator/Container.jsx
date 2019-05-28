import React from 'react';
import {connect} from "react-redux";
import {isPagination} from "../../Redux/Actions/tasks_table_actions";
import Paginator from "./Paginator";

let mapStateToProps = (state) => {
  return {
    actualPage:     state.tables.actualPage,
    tasksCountAll:  state.tasks.message.total_task_count,
  }
}

const PaginatorContainer = connect(mapStateToProps, {isPagination})(Paginator);

export default PaginatorContainer;