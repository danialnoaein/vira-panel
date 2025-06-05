// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import RiderListTable from './RiderListTable'
import type { EmployeesType } from '@/types/employeeTypes'

export const db: EmployeesType[] = [
  {
    id: 1,
    fullName: 'احمد رضایی',
    role: 'کامیون',
    leaveUsed: 4,
    leaveRemaining: 7,
    performance: 1,
    salary: '15,000,000'
  },
  {
    id: 2,
    fullName: 'نعیم گلخنی',
    role: 'نیسان',
    leaveUsed: 1,
    leaveRemaining: 12,
    performance: 5,
    salary: '23,000,000'
  }
]

const RiderList = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <RiderListTable tableData={db} />
      </Grid>
    </Grid>
  )
}

export default RiderList
