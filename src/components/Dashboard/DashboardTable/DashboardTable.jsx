import React from 'react'
import { Grid, Header, Message } from 'semantic-ui-react'
import '../../../styles/DashboardStyles/DashboardTable.css'
import { format } from 'timeago.js'
import { BiGitPullRequest } from 'react-icons/bi'
import { ImRadioChecked } from 'react-icons/im'
function DashboardTable ({ gitIssues,searchIssues }) {
  return (
      <>
    <Grid className='dashboardTableContainer'>
      <Grid.Row centered stretched>
        <Grid.Column
            className="dashboardTableColumn"
          computer={10}
          tablet={14}
          mobile={16}
        >
          {gitIssues &&
            gitIssues.filter(gt=>{
                if(searchIssues===""){
                    return gt
                }
                else if(gt.title.toLowerCase().includes(searchIssues.toLowerCase())){
                    return gt
                }
            }).map((gt,key) => (
              <Message key={key} className='dashboardTableData' color='black'>
                <div className='dashboardTableIssueBox'>
                  <Header as='h4' className='dashboardTableIssueTitle'>
                    {gt.pull_request ? (
                      <ImRadioChecked className='dotCircleIcon' />
                    ) : (
                      <BiGitPullRequest className='dotCircleIcon' />
                    )}

                    {gt.title}
                  </Header>
                  <p className='dashboardTableIssueInfo'>
                    #{gt.number} opened {format(gt.created_at)} by{' '}
                    {gt.user.login}
                  </p>
                </div>
              </Message>
            ))}
           
        </Grid.Column>
      </Grid.Row>
    </Grid>
    </>
  )
}

export default DashboardTable
