// MUI Imports
import Grid from '@mui/material/Grid'

import BarnamehChart from '@/views/pages/reports/overview'

// Component Imports
// import ApexDonutChart from '@views/charts/apex/ApexDonutChart'

const ApexCharts = () => {
  return (
    <Grid container spacing={6}>
      {/* <Grid item xs={12} md={6}>
        <ApexDonutChart />
      </Grid> */}
      <Grid item xs={12} md={6}>
        <BarnamehChart />
      </Grid>
    </Grid>
  )
}

export default ApexCharts
