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
        <MenuItem icon={<i className='tabler-smart-home' />} href={`/reports/overview`}>
          {'دید کلی'}
        </MenuItem>

        <MenuSection label={'گزارش'}>
          <MenuItem icon={<i className='tabler-cash' />} href={`/reports/income`}>
            {'درامد'}
          </MenuItem>
          <MenuItem icon={<i className='tabler-cash' />} href={`/reports/cost`}>
            {'هزینه'}
          </MenuItem>
          <MenuItem icon={<i className='tabler-trending-up' />} href={`/reports/profitloss`}>
            {'سود و زیان'}
          </MenuItem>
          <MenuItem icon={<i className='tabler-car scale-x-[-1]' />} href={`/reports/cargofromorigin`}>
            {'حمل بار از محل بارگیری'}
          </MenuItem>
          <MenuItem icon={<i className='tabler-car' />} href={`/reports/cargofromdestination`}>
            {'حمل بار از محل تخلیه'}
          </MenuItem>
        </MenuSection>

        <MenuSection label={'مدیریت'}>
          <MenuItem icon={<i className='tabler-users' />} href={`/management/employees`}>
            {'کارمندان'}
          </MenuItem>
          <MenuItem icon={<i className='tabler-users' />} href={`/management/riders`}>
            {'رانندگان'}
          </MenuItem>
          <MenuItem icon={<i className='tabler-users' />} href={`/management/users`}>
            {'کاربران'}
          </MenuItem>
          <MenuItem icon={<i className='tabler-settings' />} href={`/management/settings`}>
            {'تنظیمات'}
          </MenuItem>
        </MenuSection>
      </Menu>
    </ScrollWrapper>
  )
}

export default VerticalMenu
