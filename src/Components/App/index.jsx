import React, { Component } from 'react';
import {Route} from "react-router-dom";
import Header from '../Header';
import TaskTable_Container from "../TaskTable/Container";
import LoginForm_Container from "../LoginForm/Container";
import AddTaskForm_Container from "../AddTaskForm/Container";
import TaskTableAdmin_Container from "../TaskTableAdmin/Container";
import 'bootstrap/dist/css/bootstrap.css'
import 'semantic-ui-css/semantic.min.css'
import style from './style.module.css'

class App extends Component {

  render() {
    let pageIndex = () => {
      return <TaskTable_Container />
    }
    let pageAddTask = () => {
      return <AddTaskForm_Container />
    }
    let pageLogin = () => {
      return <LoginForm_Container />
    }
    let pageAdmin = () => {
      return <TaskTableAdmin_Container />
    }

    return (
        <div className={style.wrapper}>
          <div className={style.content}>
            <Header />
            <section>
              <div className="container">
                <div className="row">
                  <div className="col-md-10 mt-5">
                    <Route path='/index'    render={pageIndex}/>
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
