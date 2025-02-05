// MUI Imports
import Grid from '@mui/material/Grid'

import CargoFromOriginReport from '@/views/pages/reports/cargoFromOrigin'

const CargoFromOriginReportPage = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={12}>
        <CargoFromOriginReport />
      </Grid>
    </Grid>
  )
}

export default CargoFromOriginReportPage
