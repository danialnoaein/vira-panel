// MUI Imports
import Grid from '@mui/material/Grid'

import ProfitLossReport from '@/views/pages/reports/profitLoss'

const IncomeReportPage = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={12}>
        <ProfitLossReport />
      </Grid>
    </Grid>
  )
}

export default IncomeReportPage
