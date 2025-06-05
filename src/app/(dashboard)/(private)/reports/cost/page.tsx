// MUI Imports
import Grid from '@mui/material/Grid'

import CostReport from '@/views/pages/reports/cost'

const IncomeReportPage = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={12}>
        <CostReport />
      </Grid>
    </Grid>
  )
}

export default IncomeReportPage
