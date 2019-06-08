import React from 'react'
import { Pagination } from 'semantic-ui-react'

const Pager = (props) => {
  let currentPage = props.currentPage;
  let totalPages  = Math.ceil(props.tasksCountAll / 3);

  return (
    <div className="text-center pt-4">
      <Pagination
          defaultActivePage={currentPage}
          firstItem={null}
          lastItem={null}
          pointing
          secondary
          siblingRange={1}
          totalPages={totalPages}
          onClick={ (e) => {props.isPagination(e)} }
          className="small"
      />
    </div>
  )
}

export default Pager;
