import React from 'react';
import PagerContainer from '../Helpers/Pager/Container';
import Preloader from '../Helpers/Preloader/Preloader';
import Table from './Table';

const ContainerFetching = (props) => {
  const isFetching = props.isFetching;

  if (isFetching) {
    return <Preloader />;
  }
  return (
    <>
      <div className="table-responsive">
        <Table {...props} />
      </div>
      <PagerContainer />
    </>
  );
};

export default ContainerFetching;
