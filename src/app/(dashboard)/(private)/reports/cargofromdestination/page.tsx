// MUI Imports
import Grid from '@mui/material/Grid'

import CargoFromDestinationReport from '@/views/pages/reports/cargoFromDestination'

const CargoFromDestinationReportPage = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={12}>
        <CargoFromDestinationReport />
      </Grid>
    </Grid>
  )
}

export default CargoFromDestinationReportPage
