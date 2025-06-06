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

const ProfitLossReport = () => {
  // Vars
  const divider = 'var(--mui-palette-divider)'
  const disabledText = 'var(--mui-palette-text-disabled)'

  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    colors: undefined,
    dataLabels: { enabled: false },
    plotOptions: {
      bar: {
        borderRadius: 8,
        borderRadiusApplication: 'end',
        borderRadiusWhenStacked: 'all',
        barHeight: '30%',
        colors: {
          ranges: [
            {
              from: -Infinity,
              to: 0,
              color: '#FF4D4F' // Red for loss
            },
            {
              from: 1,
              to: Infinity,
              color: '#52C41A' // Green for profit
            }
          ]
        }
      }
    },
    grid: {
      borderColor: divider,
      xaxis: {
        lines: { show: false }
      },
      padding: {
        top: -10
      }
    },
    yaxis: {
      labels: {
        style: { colors: disabledText, fontSize: '13px' }
      }
    },
    xaxis: {
      axisBorder: { show: false },
      axisTicks: { color: divider },
      categories: [
        'فروردین',
        'اردیبهشت',
        'خرداد',
        'تیر',
        'مرداد',
        'شهریور',
        'مهر',
        'آبان',
        'آذر',
        'دی',
        'بهمن',
        'اسفند'
      ],
      labels: {
        style: { colors: disabledText, fontSize: '13px' }
      }
    }
  }

  const getTodos = async () => {
    return [
      12000, // فروردین (Profit)
      -5000, // اردیبهشت (Loss)
      18000, // خرداد (Profit)
      -2000, // تیر (Loss)
      17000, // مرداد (Profit)
      -8000, // شهریور (Loss)
      25000, // مهر (Profit)
      24000, // آبان (Profit)
      -10000, // آذر (Loss)
      19000, // دی (Profit)
      -3000, // بهمن (Loss)
      26000 // اسفند (Profit)
    ]

    const fetch = await axios(`/api/reports/income?start_date=2024-03-20&end_date=2025-03-21`, {
      method: 'GET'
    })

    return fetch.data.data
  }

  // Queries
  const query = useQuery({ queryKey: ['todos'], queryFn: getTodos })

  return (
    <Card>
      <CardHeader
        title='سود و زیان'
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
            type='bar'
            width='100%'
            height={400}
            options={options}
            series={[{ data: query.data ?? [] }]}
            labels={[
              'فروردین',
              'اردیبهشت',
              'خرداد',
              'تیر',
              'مرداد',
              'شهریور',
              'مهر',
              'آبان',
              'آذر',
              'دی',
              'بهمن',
              'اسفند'
            ]}
          />
        )}
      </CardContent>
    </Card>
  )
}

export default ProfitLossReport
