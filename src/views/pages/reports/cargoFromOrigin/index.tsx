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

const CargoFromOriginReport = () => {
  // Vars

  const options: ApexOptions = {
    chart: {
      type: 'polarArea'
    },
    labels: ['Rose A', 'Rose B', 'Rose C', 'Rose D', 'Rose E'],
    fill: {
      opacity: 1
    },
    stroke: {
      width: 1,
      colors: undefined
    },
    yaxis: {
      show: false
    },
    legend: {
      position: 'bottom'
    },
    plotOptions: {
      polarArea: {
        rings: {
          strokeWidth: 0
        },
        spokes: {
          strokeWidth: 0
        }
      }
    },
    theme: {
      monochrome: {
        enabled: true,
        shadeTo: 'light',
        shadeIntensity: 0.6
      }
    }
  }

  const getTodos = async () => {
    const fetch = await axios(`/api/reports/cargo-by-origin?start_date=2024-02-01&end_date=2025-01-30`, {
      method: 'GET'
    })

    console.log(fetch.data)

    return fetch.data.data
  }

  // Queries
  const query = useQuery({ queryKey: ['todos'], queryFn: getTodos })

  return (
    <Card>
      <CardHeader
        title='درآمد'
        sx={{
          flexDirection: ['column', 'row'],
          alignItems: ['flex-start', 'center'],
          '& .MuiCardHeader-action': { mb: 0 },
          '& .MuiCardHeader-content': { mb: [2, 0] }
        }}
      />
      <CardContent>
        <AppReactApexCharts options={options} series={query.data ?? []} type='polarArea' />
      </CardContent>
    </Card>
  )
}

export default CargoFromOriginReport
