// MUI Imports
import { useTheme } from '@mui/material/styles'

// Third-party Imports
import PerfectScrollbar from 'react-perfect-scrollbar'

// Type Imports
import type { VerticalMenuContextProps } from '@menu/components/vertical-menu/Menu'

// Component Imports
import { Menu, MenuItem, MenuSection } from '@menu/vertical-menu'

// import { GenerateVerticalMenu } from '@components/GenerateMenu'

// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'

// Styled Component Imports
import StyledVerticalNavExpandIcon from '@menu/styles/vertical/StyledVerticalNavExpandIcon'

// Style Imports
import menuItemStyles from '@core/styles/vertical/menuItemStyles'
import menuSectionStyles from '@core/styles/vertical/menuSectionStyles'

// Menu Data Imports
// import menuData from '@/data/navigation/verticalMenuData'

type RenderExpandIconProps = {
  open?: boolean
  transitionDuration?: VerticalMenuContextProps['transitionDuration']
}

type Props = {
  scrollMenu: (container: any, isPerfectScrollbar: boolean) => void
}

const RenderExpandIcon = ({ open, transitionDuration }: RenderExpandIconProps) => (
  <StyledVerticalNavExpandIcon open={open} transitionDuration={transitionDuration}>
    <i className='tabler-chevron-right' />
  </StyledVerticalNavExpandIcon>
)

const VerticalMenu = ({ scrollMenu }: Props) => {
  // Hooks
  const theme = useTheme()
  const verticalNavOptions = useVerticalNav()

  // Vars
  const { isBreakpointReached, transitionDuration } = verticalNavOptions

  const ScrollWrapper = isBreakpointReached ? 'div' : PerfectScrollbar

  return (
    // eslint-disable-next-line lines-around-comment
    /* Custom scrollbar instead of browser scroll, remove if you want browser scroll only */
    <ScrollWrapper
      {...(isBreakpointReached
        ? {
            className: 'bs-full overflow-y-auto overflow-x-hidden',
            onScroll: container => scrollMenu(container, false)
          }
        : {
            options: { wheelPropagation: false, suppressScrollX: true },
            onScrollY: container => scrollMenu(container, true)
          })}
    >
      {/* Incase you also want to scroll NavHeader to scroll with Vertical Menu, remove NavHeader from above and paste it below this comment */}
      {/* Vertical Menu */}
      <Menu
        popoutMenuOffset={{ mainAxis: 23 }}
        menuItemStyles={menuItemStyles(verticalNavOptions, theme)}
        renderExpandIcon={({ open }) => <RenderExpandIcon open={open} transitionDuration={transitionDuration} />}
        renderExpandedMenuItemIcon={{ icon: <i className='tabler-circle text-xs' /> }}
        menuSectionStyles={menuSectionStyles(verticalNavOptions, theme)}
      >
        {/*  <SubMenu
          label={'داشبورد'}
          icon={<i className='tabler-smart-home' />}
          suffix={<CustomChip label='5' size='small' color='error' round='true' />}
        >
          <MenuItem icon={<i className='tabler-smart-home' />} href={`/dashboards/crm`}>{'دید کلی'}</MenuItem>
         <MenuItem href={`/dashboards/analytics`}>{'آنالیز'}</MenuItem>
          <MenuItem href={`/dashboards/ecommerce`}>{'eCommerce'}</MenuItem>
          <MenuItem href={`/dashboards/academy`}>{'Academy'}</MenuItem>
          <MenuItem href={`/dashboards/logistics`}>{'Logistics'}</MenuItem> 
        </SubMenu>*/}
        <MenuItem icon={<i className='tabler-smart-home' />} href={`/reports/overview`}>
          {'دید کلی'}
        </MenuItem>

        <MenuSection label={'عملکرد'}>
          <MenuItem href={`/reports/four`}>{' درامد'}</MenuItem>
          {/* <MenuItem href={`/reports/three`}>{'سود و زیان '}</MenuItem> */}
          {/* <MenuItem href={`/reports/five`}>{'عملکرد واحد'}</MenuItem> */}
          {/* <MenuItem href={`/reports/six`}>{'عملکرد هر شخص'}</MenuItem> */}
        </MenuSection>

        <MenuSection label={'بار'}>
          <MenuItem href={`/reports/one`}>{'مقایسه بار از مبدا'}</MenuItem>
          {/* <MenuItem href={`/reports/two`}>{'مقایسه بار ها از مقصد'}</MenuItem> */}
        </MenuSection>

        <MenuSection label={'مدیریت'}>
          {/* <MenuItem href={`/reports/overview`}>{'درخواست ها'}</MenuItem> */}
          <MenuItem href={`/reports/settings`}>{'تنظیمات'}</MenuItem>
        </MenuSection>
      </Menu>
      {/* <Menu
        popoutMenuOffset={{ mainAxis: 23 }}
        menuItemStyles={menuItemStyles(verticalNavOptions, theme)}
        renderExpandIcon={({ open }) => <RenderExpandIcon open={open} transitionDuration={transitionDuration} />}
        renderExpandedMenuItemIcon={{ icon: <i className='tabler-circle text-xs' /> }}
        menuSectionStyles={menuSectionStyles(verticalNavOptions, theme)}
      >
        <GenerateVerticalMenu menuData={menuData(dictionary)} />
      </Menu> */}
    </ScrollWrapper>
  )
}

export default VerticalMenu
