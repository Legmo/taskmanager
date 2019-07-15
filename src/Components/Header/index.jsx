import React from 'react';
import style from './style.module.css';
import NavigationContainer from '../Navigation/Container';

const Header = () => (
  <header className={style.header}>
    <div className="container">
      <div className="row">
        <div className="col-md-10 text-center mt-3 mx-auto">
          <div>
            <h1>Задачник</h1>
          </div>
          <NavigationContainer />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
