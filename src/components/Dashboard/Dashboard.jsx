import React, { useEffect, useState } from 'react'
import DashboardNavbar from './DashboardNavbar/DashboardNavbar'
import '../../styles/DashboardStyles/Dashboard.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchIssues } from '../redux/actions'
import {Dimmer, Loader } from 'semantic-ui-react'
import { Toaster } from 'react-hot-toast'
import DashboardSearchBar from './DashboardSearchBar/DashboardSearchBar'
import DashboardTable from './DashboardTable/DashboardTable'
import DashboardPagination from './DashboardPagination/DashboardPagination'
import DashboardFooter from './DashboardFooter/DashboardFooter'
function Dashboard () {
  const dispatch = useDispatch()
  const [pageNum, setPageNum] = useState(1)
  const [searchIssues,setSearchIssues]=useState("")
  useEffect(() => {
    dispatch(fetchIssues(pageNum))
  }, [pageNum])
  let gitIssues = useSelector(state => state.gitIssues)

  
  return (
    <div>
      <DashboardNavbar />
      
        {gitIssues ? (
          <>
           <div className='dashboardContainer'>
            <DashboardSearchBar setSearchIssues={setSearchIssues} searchIssues={searchIssues} />
            <DashboardTable searchIssues={searchIssues} gitIssues={gitIssues}/>
            <DashboardPagination setPageNum={setPageNum}/>
            </div>
            <DashboardFooter/>
          </>
        ) : (
          <Dimmer active className='noMessageLoader'>
            <Loader>Loading...</Loader>
          </Dimmer>
        )}
      
      <Toaster position='top-center' reverseOrder={false} />
    </div>
  )
}

export default Dashboard
