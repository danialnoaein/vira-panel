// MUI Imports
import Grid from '@mui/material/Grid'

import ApexBarChart from '@/views/charts/apex/ApexBarChart'

//https://nivo.rocks/chord/
const ApexCharts = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={12}>
        <ApexBarChart />
      </Grid>
    </Grid>
  )
}

export default ApexCharts
