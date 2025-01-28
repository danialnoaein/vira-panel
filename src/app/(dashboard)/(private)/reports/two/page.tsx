// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import ApexDonutChart from '@views/charts/apex/ApexDonutChart'

const ApexCharts = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={12}>
        <ApexDonutChart />
      </Grid>
    </Grid>
  )
}

export default ApexCharts
