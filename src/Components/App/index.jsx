import React, { Component } from 'react';
import {Route} from "react-router-dom";
import Header from '../Header';
import TaskTableContainer from "../TaskTable/Container";
import LoginFormContainer from "../LoginForm/Container";
import AddTaskFormContainer from "../AddTaskForm/Container";
import TaskTableAdminContainer from "../TaskTableAdmin/Container";
import 'bootstrap/dist/css/bootstrap.css'
import 'semantic-ui-css/semantic.min.css'
import style from './style.module.css'

class App extends Component {

  render() {
    let pageIndex = () => {
      return <TaskTableContainer />
    }
    let pageAddTask = () => {
      return <AddTaskFormContainer />
    }
    let pageLogin = () => {
      return <LoginFormContainer />
    }
    let pageAdmin = () => {
      return <TaskTableAdminContainer />
    }

    return (
        <div className={style.wrapper}>
          <div className={style.content}>
            <Header />
            <section>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-10 mt-5 mx-auto">
                    <Route path='/' exact   render={pageIndex}/>
                    <Route path='/add_task' render={pageAddTask}/>
                    <Route path='/login'    render={pageLogin}/>
                    <Route path='/admin'    render={pageAdmin}/>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
    )
  }
}


export default App;
