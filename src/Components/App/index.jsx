import React, { Component } from 'react';
import {Route} from "react-router-dom";
import Header from '../Header';
import TableContainer from "../Table/Container";
import LoginFormContainer from "../LoginForm/Container";
import AddTaskFormContainer from "../AddTaskForm/Container";
import 'bootstrap/dist/css/bootstrap.css'
import 'semantic-ui-css/semantic.min.css'
import style from './style.module.css'

class App extends Component {

  render() {
    let pageAddTask = () => {
      return <AddTaskFormContainer />
    }
    let pageLogin = () => {
      return <LoginFormContainer />
    }
    let pageTable = () => {
      return <TableContainer />
    }

    return (
        <div className={style.wrapper}>
          <div className={style.content}>
            <Header />
            <section>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-10 mt-5 mx-auto">
                    <Route path='/' exact   render={pageTable}/>
                    <Route path='/add_task' render={pageAddTask}/>
                    <Route path='/login'    render={pageLogin}/>
                    <Route path='/admin'    render={pageTable}/>
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
