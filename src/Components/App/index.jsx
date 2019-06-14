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
    return (
        <div className={style.wrapper}>
          <div className={style.content}>
            <Header />
            <section>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-10 mt-5 mx-auto">
                    <Route path='/' exact   render={() => <TableContainer />}/>
                    <Route path='/add_task' render={() => <AddTaskFormContainer />}/>
                    <Route path='/login'    render={() => <LoginFormContainer />}/>
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
