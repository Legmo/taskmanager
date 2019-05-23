import React from 'react'
import { Pagination } from 'semantic-ui-react'

const Paginator = (props) => {
  let actualPage = props.actualPage;
  let totalPages = Math.ceil(props.tasksCountAll / 3);

  return (
    <div className="text-center pt-3">
      <Pagination
          defaultActivePage={actualPage}
          firstItem={null}
          lastItem={null}
          pointing
          secondary
          totalPages={totalPages}
      />
    </div>
  )
}

export default Paginator;
