import React from 'react'
import { Pagination } from 'semantic-ui-react'

const Pager = (props) => {
  let currentPage = props.currentPage;
  let totalPages  = Math.ceil(props.tasksCountAll / 3);

  return (
    <div className="text-center pt-3">
      <Pagination
          defaultActivePage={currentPage}
          firstItem={null}
          lastItem={null}
          pointing
          secondary
          totalPages={totalPages}
          onClick={ (e) => {props.isPagination(e)} }
      />
    </div>
  )
}

export default Pager;
