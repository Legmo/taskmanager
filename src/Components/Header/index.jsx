import React from 'react';
import style from './style.module.css'
import Navigation_Container from "../Navigation/Container"

const Header = (props) => {
  let state = props.state;
  return (
      <header className={style.header}>
        <div className="container">
          <div className="row">
            <div className="col-md-10 text-center mt-3">
              <div>
                <h1>Задачник</h1>
              </div>
              <Navigation_Container state={state}/>
            </div>
          </div>
        </div>
      </header>
  )
}


export default Header;