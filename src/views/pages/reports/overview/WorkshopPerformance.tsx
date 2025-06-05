// MUI Imports
import Grid from '@mui/material/Grid'

// Type Imports

// Component Imports
// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

// Third-party Imports
import classnames from 'classnames'

import type { ThemeColor } from '@/@core/types'

export type UserDataType = {
  title: string
  stats: string
  avatarIcon: string
  avatarColor?: ThemeColor
  subtitle: string
}

// Component Imports
import CustomAvatar from '@core/components/mui/Avatar'

// Vars
const data: UserDataType[] = [
  {
    title: 'حکم کار',
    stats: '59',
    avatarIcon: 'tabler-users',
    avatarColor: 'info',
    subtitle: 'حکم'
  },
  {
    title: 'هزینه های پیمانکار',
    stats: '237,000,000',
    avatarIcon: 'tabler-receipt-dollar',
    avatarColor: 'warning',
    subtitle: 'تومان'
  },
  {
    title: 'در انتظار صورت وضعیت',
    stats: '4',
    avatarIcon: 'tabler-mail-exclamation',
    avatarColor: 'secondary',
    subtitle: 'درخواست'
  }
]

const WorkshopPerformance = () => {
  return (
    <Grid container spacing={6}>
      {data.map((item, i) => (
        <Grid key={i} item xs={12} sm={3} md={3}>
          <Card>
            <CardContent className='flex justify-between gap-1'>
              <div className='flex flex-col gap-1 flex-grow'>
                <Typography color='text.primary'>{item.title}</Typography>
                <div className='flex items-center gap-2 flex-wrap'>
                  <Typography variant='h3'>{item.stats}</Typography>
                </div>
                <Typography variant='body2'>{item.subtitle}</Typography>
              </div>
              <CustomAvatar color={item.avatarColor} skin='light' variant='rounded' size={42}>
                <i className={classnames(item.avatarIcon, 'text-[26px]')} />
              </CustomAvatar>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default WorkshopPerformance
