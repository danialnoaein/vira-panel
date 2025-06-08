// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import EmployeeListTable from './EmployeeListTable'

export const db: any[] = [
  {
    id: 1,
    fullName: 'علی احمدی',
    role: 'حسابدار',
    leaveUsed: 4,
    leaveRemaining: 7,
    performance: 1,
    salary: '15,000,000'
  },
  {
    id: 2,
    fullName: 'مرتضی سیف',
    role: 'دفتردار',
    leaveUsed: 1,
    leaveRemaining: 12,
    performance: 5,
    salary: '23,000,000'
  }
]

const EmployeeList = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <EmployeeListTable />
      </Grid>
    </Grid>
  )
}

export default EmployeeList
