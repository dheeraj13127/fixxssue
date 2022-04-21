import React from 'react'
import { Grid, Pagination } from 'semantic-ui-react'
import '../../../styles/DashboardStyles/DashboardPagination.css'
function DashboardPagination({setPageNum}) {
  const changeNewPage=(e,p)=>{
    setPageNum(p.activePage)
  }
  return (
    <>
    <Grid className="dashboardPaginationColumn"> 
    <Grid.Row centered >
      <Grid.Column textAlign="center" computer={16} tablet={16} mobile={16}>
        <Pagination onPageChange={changeNewPage} className="dashboardPaginationBox" firstItem={null} lastItem={null} defaultActivePage={1} totalPages={6}/>
      </Grid.Column>
    </Grid.Row>
    </Grid>

    </>    
  )
}

export default DashboardPagination