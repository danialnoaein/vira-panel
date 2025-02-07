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
  stroke: { width: 0 },
  dataLabels: {
    enabled: true,
    formatter: (val: string) => `${parseInt(val, 10)}%`
  },
  legend: {
    fontSize: '13px',
    position: 'bottom',
    itemMargin: {
      horizontal: 9
    }
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          name: {
            fontSize: '1.2rem'
          },
          value: {
            fontSize: '1.2rem',
            fontWeight: 'bold'
          },
          total: {
            show: true,
            fontSize: '1.2rem',
            label: 'کل بارنامه ها',
            color: 'var(--mui-palette-text-primary)'
          }
        }
      }
    }
  },
  responsive: [
    {
      breakpoint: 992,
      options: {
        chart: {
          height: 380
        },
        legend: {
          position: 'bottom'
        }
      }
    },
    {
      breakpoint: 576,
      options: {
        chart: {
          height: 320
        },
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                name: {
                  fontSize: '1rem'
                },
                value: {
                  fontSize: '1rem'
                },
                total: {
                  fontSize: '1rem'
                }
              }
            }
          }
        }
      }
    }
  ]
}

const BarnamehChart = () => {
  const getData = async () => {
    const fetch = await axios(`/api/reports/vehicles?start_date=2024-03-20&end_date=2025-03-21`, {
      method: 'GET'
    })

    return fetch.data.data
  }

  // Queries
  const query = useQuery({ queryKey: ['todos'], queryFn: getData })

  return (
    <Card>
      <CardHeader title='بارنامه' subheader='به تفکیک نوع' />
      <CardContent>
        {!query.data && <div>Loading...</div>}
        {query.data && (
          <AppReactApexCharts
            type='donut'
            width='100%'
            height={600}
            options={{ ...defaultOptions, labels: query.data.map((item: any) => `${item.barname_type}`) ?? [] }}
            series={query.data.map((item: any) => item.count) ?? []}
          />
        )}
      </CardContent>
    </Card>
  )
}

export default BarnamehChart
