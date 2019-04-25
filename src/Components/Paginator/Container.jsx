import React from 'react';
import {connect} from "react-redux";
import {isPagination} from "../../Redux/Actions/tasks_table_actions";
import Paginator from "./Paginator";


let mapStateToProps = (state) => {
  return {
    actualPage: state.tables.actualPage,
    tasksCountAll:  state.tasks.message.total_task_count,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    isPagination: (inf) => {dispatch(isPagination(inf))},
  }
}

const Paginator_Container = connect(mapStateToProps, mapDispatchToProps)(Paginator);

export default Paginator_Container;