// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import NivoChordChart from '@/views/charts/nivo/NivoChordChart'

const ApexCharts = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={12}>
        <NivoChordChart />
      </Grid>
    </Grid>
  )
}

export default ApexCharts
