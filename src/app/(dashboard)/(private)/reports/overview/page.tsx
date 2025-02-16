// MUI Imports
import Grid from '@mui/material/Grid'

import BarnamehChart from '@/views/pages/reports/overview'
import OverviewCards from '@/views/pages/reports/overview/OverviewCards'

const ApexCharts = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <OverviewCards />
      </Grid>
      <Grid item xs={6}>
        <BarnamehChart />
      </Grid>
    </Grid>
  )
}

export default ApexCharts
