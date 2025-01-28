// MUI Imports
import Grid from '@mui/material/Grid'

import ApexAreaChart from '@/views/charts/apex/ApexAreaChart'

const ApexCharts = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={12}>
        <ApexAreaChart />
      </Grid>
    </Grid>
  )
}

export default ApexCharts
