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

import type { UserDataType } from '@components/card-statistics/HorizontalWithSubtitle'

// Component Imports
import CustomAvatar from '@core/components/mui/Avatar'

// Vars
const data: UserDataType[] = [
  {
    title: ' مکانیزم های فعال',
    stats: '59',
    avatarIcon: 'tabler-users',
    avatarColor: 'warning',
    trend: 'positive',
    trendNumber: '29%',
    subtitle: 'مکانیزم'
  },
  {
    title: ' کاربران فعال',
    stats: '47',
    avatarIcon: 'tabler-user-plus',
    avatarColor: 'info',
    trend: 'positive',
    trendNumber: '18%',
    subtitle: 'نفر'
  },
  {
    title: 'درخواست های مرخصی',
    stats: '4',
    avatarIcon: 'tabler-user-plus',
    avatarColor: 'warning',
    trend: 'positive',
    trendNumber: '18%',
    subtitle: 'درخواست'
  },
  {
    title: 'رانندگان',
    stats: '19',
    avatarIcon: 'tabler-truck',
    avatarColor: 'secondary',
    trend: 'negative',
    trendNumber: '14%',
    subtitle: 'نفر'
  },
  {
    title: 'بدهی',
    stats: '237,000,000',
    avatarIcon: 'tabler-receipt-dollar',
    avatarColor: 'error',
    trend: 'positive',
    trendNumber: '42%',
    subtitle: 'تومان'
  },
  {
    title: 'طلب',
    stats: '300,000,000',
    avatarIcon: 'tabler-receipt-dollar',
    avatarColor: 'success',
    trend: 'positive',
    trendNumber: '42%',
    subtitle: 'تومان'
  }
]

const OverviewCards = () => {
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

export default OverviewCards
