import React from 'react';
import style from './style.module.css'
import PagerContainer from "../Helpers/Pager/Container";
import Preloader from "../Helpers/Preloader/Preloader";
import Table from './Table'

const ContainerFetching = (props) => {
  let isFetching = props.isFetching;

  if(isFetching) {
    return <Preloader />
  }
  return (
    <>
      <div className="table-responsive">
        <Table {...props} />
      </div>
      <PagerContainer/>
    </>
  )

}

export default ContainerFetching;