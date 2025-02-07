'use client'

// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// Third-party Imports
import type { ApexOptions } from 'apexcharts'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

// Styled Component Imports
const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

const defaultOptions: ApexOptions = {
  chart: {
    type: 'polarArea'
  },
  stroke: {
    colors: ['#fff']
  },
  fill: {
    opacity: 0.8
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }
  ]
}

const CargoFromDestinationReport = () => {
  // Vars

  const getData = async () => {
    const fetch = await axios(`/api/reports/cargo-by-destination?start_date=2024-03-20&end_date=2025-03-21`, {
      method: 'GET'
    })

    return fetch.data.data
  }

  // Queries
  const query = useQuery({ queryKey: ['todos'], queryFn: getData })

  return (
    <Card>
      <CardHeader
        title='مقایسه بار از مقصد'
        sx={{
          flexDirection: ['column', 'row'],
          alignItems: ['flex-start', 'center'],
          '& .MuiCardHeader-action': { mb: 0 },
          '& .MuiCardHeader-content': { mb: [2, 0] }
        }}
      />
      <CardContent>
        {!query.data && <div>Loading...</div>}
        {query.data && (
          <AppReactApexCharts
            options={{ ...defaultOptions, labels: query.data.map((item: any) => `${item.receiverCityName}`) ?? [] }}
            series={query.data.map((item: any) => `${item.shipment_count}`) ?? []}
            type='polarArea'
          />
        )}
      </CardContent>
    </Card>
  )
}

export default CargoFromDestinationReport
