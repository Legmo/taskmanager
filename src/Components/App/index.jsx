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
/*  state = {
    loggedUser: false,
    sortDirection: 'asc',
  }*/

  constructor(props) {
    super(props);
  }

/*  async componentDidMount() {
    const response = await fetch(` https://uxcandy.com/~shapoval/test-task-backend/?developer=${developerName} `)
    const data = await response.json()
    // console.log(data)
  }*/

  gettingData = async () => {
    const developerName = 'Name';
    const api_url = await fetch(` https://uxcandy.com/~shapoval/test-task-backend/?developer=${developerName} `)
    const data = await api_url.json();
    console.log(data);
  }

  // let isLogeddUser = this.props.login;

  render() {
    // console.log(this);

    let pageIndex = () => {
      return (
          <div>
            <TaskTable_Container />
          </div>
      )
    }
    let pageAddTask = () => {
      return (
          <div>
            <AddTaskForm_Container />
          </div>
      )
    }
    let pageLogin = () => {
      return (
          <div>
            <LoginForm_Container />
          </div>
      )
    }
    let pageAdmin = () => {
      return (
          <div>
            <TaskTableAdmin_Container />
          </div>
      )
    }

    return (
        <div className={style.wrapper}>
          <div className={style.content}>
            <Header />
            <section>
              <div className="container">
                <div className="row">
                  <div className="col-md-10 mt-5">
                    <Route path='/index' render={pageIndex}/>
                    <Route path='/add_task' render={pageAddTask}/>
                    <Route path='/login' render={pageLogin}/>
                    <Route path='/admin' render={pageAdmin}/>
                  </div>
                </div>
              </div>
            </section>
            {/*<div className={style.footer_pusher}></div>*/}
          </div>
          {/*<Footer/>*/}
        </div>
    )
  }
}


export default App;
