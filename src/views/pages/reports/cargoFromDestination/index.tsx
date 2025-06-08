'use client'

// Next Imports
import { useMemo } from 'react'

import dynamic from 'next/dynamic'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// Third-party Imports
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

// Styled Component Imports
const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

const CargoFromDestinationReport = () => {
  // Vars

  const getData = async () => {
    const fetch = await axios(`/api/reports/cargo-by-destination?start_date=2024-03-20&end_date=2025-03-21`, {
      method: 'GET'
    })

    return fetch.data.data.slice(0, 10)
  }

  // Queries
  const query = useQuery({ queryKey: ['CargoFromDestinationReport'], queryFn: getData, initialData: [] })

  const series = useMemo(() => {
    return query.data.map((item: any) => item.shipment_count) ?? []
  }, [query])

  const options: any = useMemo(() => {
    const defaultOption = {
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

    if (query.data.length > 0) {
      return {
        ...defaultOption,
        labels: query.data.map((item: any) => `${item.receiverCityName ?? 'Unknown'}`)
      }
    }

    return defaultOption
  }, [query])

  return (
    <Card>
      <CardHeader
        title='حمل بار از محل تخلیه'
        sx={{
          flexDirection: ['column', 'row'],
          alignItems: ['flex-start', 'center'],
          '& .MuiCardHeader-action': { mb: 0 },
          '& .MuiCardHeader-content': { mb: [2, 0] }
        }}
      />
      <CardContent>
        {query.isLoading && <div>در حال بارگزاری...</div>}
        {query.isFetched && (
          <AppReactApexCharts options={options} series={series} height={600} width={1000} type='polarArea' />
        )}
      </CardContent>
    </Card>
  )
}

export default CargoFromDestinationReport
