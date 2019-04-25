import React from 'react';
import style from './style.module.css'

const Footer = (props) => {
  return (
      <footer className={style.footer + ' navbar-fixed-bottom'}>
        <div className="container">
          <div className="row">
            <div className="col-md-10 pt-3 pb-3 text-center">Подвал</div>
          </div>
        </div>
      </footer>
  )
}


export default Footer;