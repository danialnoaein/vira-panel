// MUI Imports
import Grid from '@mui/material/Grid'

import IncomeReport from '@/views/pages/reports/income'

const IncomeReportPage = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={12}>
        <IncomeReport />
      </Grid>
    </Grid>
  )
}

export default IncomeReportPage
