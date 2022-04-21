import React from 'react'
import { Grid, Input } from 'semantic-ui-react'
import '../../../styles/DashboardStyles/DashboardSearchbar.css'
function DashboardSearchBar({setSearchIssues,searchIssues}) {
    const onInputChange=(e)=>{
        setSearchIssues(e.target.value);
    }
  return (
    <>
    
    <Grid className="dashboardSearchBarColumn">
    <Grid.Row centered stretched>
    <Grid.Column computer={8} mobile={16} tablet={12}  >
    <Input onChange={onInputChange} value={searchIssues} className='dashboardSearchBarInput' focus placeholder="Search...."/>
    </Grid.Column>
    </Grid.Row>
    </Grid>
    </>
  )
}

export default DashboardSearchBar