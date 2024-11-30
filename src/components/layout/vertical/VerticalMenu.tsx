// MUI Imports
import { useTheme } from '@mui/material/styles'

// Third-party Imports
import PerfectScrollbar from 'react-perfect-scrollbar'

// Type Imports
import type { VerticalMenuContextProps } from '@menu/components/vertical-menu/Menu'

// Component Imports
import { Menu, SubMenu, MenuItem, MenuSection } from '@menu/vertical-menu'
import CustomChip from '@core/components/mui/Chip'

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
        <SubMenu
          label={'داشبورد'}
          icon={<i className='tabler-smart-home' />}
          suffix={<CustomChip label='5' size='small' color='error' round='true' />}
        >
          <MenuItem href={`/dashboards/crm`}>{'گزارش های اصلی'}</MenuItem>
          {/* <MenuItem href={`/dashboards/analytics`}>{'آنالیز'}</MenuItem>
          <MenuItem href={`/dashboards/ecommerce`}>{'eCommerce'}</MenuItem>
          <MenuItem href={`/dashboards/academy`}>{'Academy'}</MenuItem>
          <MenuItem href={`/dashboards/logistics`}>{'Logistics'}</MenuItem> */}
        </SubMenu>
        {/* <SubMenu label={'Front Pages'} icon={<i className='tabler-files' />}>
          <MenuItem href='/front-pages/landing-page' target='_blank'>
            {'Landing'}
          </MenuItem>
          <MenuItem href='/front-pages/pricing' target='_blank'>
            {'Pricing'}
          </MenuItem>
          <MenuItem href='/front-pages/payment' target='_blank'>
            {'Payment'}
          </MenuItem>
          <MenuItem href='/front-pages/checkout' target='_blank'>
            {'Checkout'}
          </MenuItem>
          <MenuItem href='/front-pages/help-center' target='_blank'>
            {'Help Center'}
          </MenuItem>
        </SubMenu> */}
        {/* <MenuSection label={dictionary['navigation'].appsPages}>
          <SubMenu label={dictionary['navigation'].eCommerce} icon={<i className='tabler-shopping-cart' />}>
            <MenuItem href={`/apps/ecommerce/dashboard`}>{dictionary['navigation'].dashboard}</MenuItem>
            <SubMenu label={dictionary['navigation'].products}>
              <MenuItem href={`/apps/ecommerce/products/list`}>{dictionary['navigation'].list}</MenuItem>
              <MenuItem href={`/apps/ecommerce/products/add`}>{dictionary['navigation'].add}</MenuItem>
              <MenuItem href={`/apps/ecommerce/products/category`}>{dictionary['navigation'].category}</MenuItem>
            </SubMenu>
            <SubMenu label={dictionary['navigation'].orders}>
              <MenuItem href={`/apps/ecommerce/orders/list`}>{dictionary['navigation'].list}</MenuItem>
              <MenuItem
                href={`/apps/ecommerce/orders/details/5434`}
                exactMatch={false}
                activeUrl='/apps/ecommerce/orders/details'
              >
                {dictionary['navigation'].details}
              </MenuItem>
            </SubMenu>
            <SubMenu label={dictionary['navigation'].customers}>
              <MenuItem href={`/apps/ecommerce/customers/list`}>{dictionary['navigation'].list}</MenuItem>
              <MenuItem
                href={`/apps/ecommerce/customers/details/879861`}
                exactMatch={false}
                activeUrl='/apps/ecommerce/customers/details'
              >
                {dictionary['navigation'].details}
              </MenuItem>
            </SubMenu>
            <MenuItem href={`/apps/ecommerce/manage-reviews`}>{dictionary['navigation'].manageReviews}</MenuItem>
            <MenuItem href={`/apps/ecommerce/referrals`}>{dictionary['navigation'].referrals}</MenuItem>
            <MenuItem href={`/apps/ecommerce/settings`}>{dictionary['navigation'].settings}</MenuItem>
          </SubMenu>
          <SubMenu label={dictionary['navigation'].academy} icon={<i className='tabler-school' />}>
            <MenuItem href={`/apps/academy/dashboard`}>{dictionary['navigation'].dashboard}</MenuItem>
            <MenuItem href={`/apps/academy/my-courses`}>{dictionary['navigation'].myCourses}</MenuItem>
            <MenuItem href={`/apps/academy/course-details`}>{dictionary['navigation'].courseDetails}</MenuItem>
          </SubMenu>
          <SubMenu label={dictionary['navigation'].logistics} icon={<i className='tabler-truck' />}>
            <MenuItem href={`/apps/logistics/dashboard`}>{dictionary['navigation'].dashboard}</MenuItem>
            <MenuItem href={`/apps/logistics/fleet`}>{dictionary['navigation'].fleet}</MenuItem>
          </SubMenu>
          <MenuItem
            href={`/apps/email`}
            icon={<i className='tabler-mail' />}
            exactMatch={false}
            activeUrl='/apps/email'
          >
            {dictionary['navigation'].email}
          </MenuItem>
          <MenuItem href={`/apps/chat`} icon={<i className='tabler-message-circle-2' />}>
            {dictionary['navigation'].chat}
          </MenuItem>
          <MenuItem href={`/apps/calendar`} icon={<i className='tabler-calendar' />}>
            {dictionary['navigation'].calendar}
          </MenuItem>
          <MenuItem href={`/apps/kanban`} icon={<i className='tabler-copy' />}>
            {dictionary['navigation'].kanban}
          </MenuItem>
          <SubMenu label={dictionary['navigation'].invoice} icon={<i className='tabler-file-description' />}>
            <MenuItem href={`/apps/invoice/list`}>{dictionary['navigation'].list}</MenuItem>
            <MenuItem href={`/apps/invoice/preview/4987`} exactMatch={false} activeUrl='/apps/invoice/preview'>
              {dictionary['navigation'].preview}
            </MenuItem>
            <MenuItem href={`/apps/invoice/edit/4987`} exactMatch={false} activeUrl='/apps/invoice/edit'>
              {dictionary['navigation'].edit}
            </MenuItem>
            <MenuItem href={`/apps/invoice/add`}>{dictionary['navigation'].add}</MenuItem>
          </SubMenu>
          <SubMenu label={dictionary['navigation'].user} icon={<i className='tabler-user' />}>
            <MenuItem href={`/apps/user/list`}>{dictionary['navigation'].list}</MenuItem>
            <MenuItem href={`/apps/user/view`}>{dictionary['navigation'].view}</MenuItem>
          </SubMenu>
          <SubMenu label={dictionary['navigation'].rolesPermissions} icon={<i className='tabler-lock' />}>
            <MenuItem href={`/apps/roles`}>{dictionary['navigation'].roles}</MenuItem>
            <MenuItem href={`/apps/permissions`}>{dictionary['navigation'].permissions}</MenuItem>
          </SubMenu>
          <SubMenu label={dictionary['navigation'].pages} icon={<i className='tabler-file' />}>
            <MenuItem href={`/pages/user-profile`}>{dictionary['navigation'].userProfile}</MenuItem>
            <MenuItem href={`/pages/account-settings`}>{dictionary['navigation'].accountSettings}</MenuItem>
            <MenuItem href={`/pages/faq`}>{dictionary['navigation'].faq}</MenuItem>
            <MenuItem href={`/pages/pricing`}>{dictionary['navigation'].pricing}</MenuItem>
            <SubMenu label={dictionary['navigation'].miscellaneous}>
              <MenuItem href={`/pages/misc/coming-soon`} target='_blank'>
                {dictionary['navigation'].comingSoon}
              </MenuItem>
              <MenuItem href={`/pages/misc/under-maintenance`} target='_blank'>
                {dictionary['navigation'].underMaintenance}
              </MenuItem>
              <MenuItem href={`/pages/misc/404-not-found`} target='_blank'>
                {dictionary['navigation'].pageNotFound404}
              </MenuItem>
              <MenuItem href={`/pages/misc/401-not-authorized`} target='_blank'>
                {dictionary['navigation'].notAuthorized401}
              </MenuItem>
            </SubMenu>
          </SubMenu>
          <SubMenu label={dictionary['navigation'].authPages} icon={<i className='tabler-shield-lock' />}>
            <SubMenu label={dictionary['navigation'].login}>
              <MenuItem href={`/pages/auth/login-v1`} target='_blank'>
                {dictionary['navigation'].loginV1}
              </MenuItem>
              <MenuItem href={`/pages/auth/login-v2`} target='_blank'>
                {dictionary['navigation'].loginV2}
              </MenuItem>
            </SubMenu>
            <SubMenu label={dictionary['navigation'].register}>
              <MenuItem href={`/pages/auth/register-v1`} target='_blank'>
                {dictionary['navigation'].registerV1}
              </MenuItem>
              <MenuItem href={`/pages/auth/register-v2`} target='_blank'>
                {dictionary['navigation'].registerV2}
              </MenuItem>
              <MenuItem href={`/pages/auth/register-multi-steps`} target='_blank'>
                {dictionary['navigation'].registerMultiSteps}
              </MenuItem>
            </SubMenu>
            <SubMenu label={dictionary['navigation'].verifyEmail}>
              <MenuItem href={`/pages/auth/verify-email-v1`} target='_blank'>
                {dictionary['navigation'].verifyEmailV1}
              </MenuItem>
              <MenuItem href={`/pages/auth/verify-email-v2`} target='_blank'>
                {dictionary['navigation'].verifyEmailV2}
              </MenuItem>
            </SubMenu>
            <SubMenu label={dictionary['navigation'].forgotPassword}>
              <MenuItem href={`/pages/auth/forgot-password-v1`} target='_blank'>
                {dictionary['navigation'].forgotPasswordV1}
              </MenuItem>
              <MenuItem href={`/pages/auth/forgot-password-v2`} target='_blank'>
                {dictionary['navigation'].forgotPasswordV2}
              </MenuItem>
            </SubMenu>
            <SubMenu label={dictionary['navigation'].resetPassword}>
              <MenuItem href={`/pages/auth/reset-password-v1`} target='_blank'>
                {dictionary['navigation'].resetPasswordV1}
              </MenuItem>
              <MenuItem href={`/pages/auth/reset-password-v2`} target='_blank'>
                {dictionary['navigation'].resetPasswordV2}
              </MenuItem>
            </SubMenu>
            <SubMenu label={dictionary['navigation'].twoSteps}>
              <MenuItem href={`/pages/auth/two-steps-v1`} target='_blank'>
                {dictionary['navigation'].twoStepsV1}
              </MenuItem>
              <MenuItem href={`/pages/auth/two-steps-v2`} target='_blank'>
                {dictionary['navigation'].twoStepsV2}
              </MenuItem>
            </SubMenu>
          </SubMenu>
          <SubMenu label={dictionary['navigation'].wizardExamples} icon={<i className='tabler-dots' />}>
            <MenuItem href={`/pages/wizard-examples/checkout`}>{dictionary['navigation'].checkout}</MenuItem>
            <MenuItem href={`/pages/wizard-examples/property-listing`}>
              {dictionary['navigation'].propertyListing}
            </MenuItem>
            <MenuItem href={`/pages/wizard-examples/create-deal`}>{dictionary['navigation'].createDeal}</MenuItem>
          </SubMenu>
          <MenuItem href={`/pages/dialog-examples`} icon={<i className='tabler-square' />}>
            {dictionary['navigation'].dialogExamples}
          </MenuItem>
          <SubMenu label={dictionary['navigation'].widgetExamples} icon={<i className='tabler-chart-bar' />}>
            <MenuItem href={`/pages/widget-examples/basic`}>{dictionary['navigation'].basic}</MenuItem>
            <MenuItem href={`/pages/widget-examples/advanced`}>{dictionary['navigation'].advanced}</MenuItem>
            <MenuItem href={`/pages/widget-examples/statistics`}>{dictionary['navigation'].statistics}</MenuItem>
            <MenuItem href={`/pages/widget-examples/charts`}>{dictionary['navigation'].charts}</MenuItem>
            <MenuItem href={`/pages/widget-examples/actions`}>{dictionary['navigation'].actions}</MenuItem>
          </SubMenu>
        </MenuSection> */}
        {/* <MenuSection label={'Forms & Tables'}>
          <MenuItem href={`/forms/form-layouts`} icon={<i className='tabler-layout' />}>
            {'Form Layouts'}
          </MenuItem>
          <MenuItem href={`/forms/form-validation`} icon={<i className='tabler-checkup-list' />}>
            {'Form Validation'}
          </MenuItem>
          <MenuItem href={`/forms/form-wizard`} icon={<i className='tabler-git-merge' />}>
            {'Form Wizard'}
          </MenuItem>
          <MenuItem href={`/react-table`} icon={<i className='tabler-table' />}>
            {'"React Table'}
          </MenuItem>
          <MenuItem
            icon={<i className='tabler-checkbox' />}
            href={`${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements`}
            suffix={<i className='tabler-external-link text-xl' />}
            target='_blank'
          >
            {'Form Elements'}
          </MenuItem>
          <MenuItem
            icon={<i className='tabler-layout-board-split' />}
            href={`${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/mui-table`}
            suffix={<i className='tabler-external-link text-xl' />}
            target='_blank'
          >
            {'MUI Tables'}
          </MenuItem>
        </MenuSection> */}
        <MenuSection label={'نمودار'}>
          <SubMenu label={'نمودار'} icon={<i className='tabler-chart-donut-2' />}>
            <MenuItem href={`/charts/apex-charts`}>{'APEX'}</MenuItem>
            <MenuItem href={`/charts/recharts`}>{'ReCharts'}</MenuItem>
          </SubMenu>
          {/* <MenuItem
            icon={<i className='tabler-cards' />}
            href={`${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/foundation`}
            suffix={<i className='tabler-external-link text-xl' />}
            target='_blank'
          >
            {'Foundation'}
          </MenuItem> */}
        </MenuSection>
        {/* <MenuSection label={dictionary['navigation'].chartsMisc}>
          <SubMenu label={dictionary['navigation'].charts} icon={<i className='tabler-chart-donut-2' />}>
            <MenuItem href={`/charts/apex-charts`}>{dictionary['navigation'].apex}</MenuItem>
            <MenuItem href={`/charts/recharts`}>{dictionary['navigation'].recharts}</MenuItem>
          </SubMenu>
          <MenuItem
            icon={<i className='tabler-cards' />}
            href={`${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/foundation`}
            suffix={<i className='tabler-external-link text-xl' />}
            target='_blank'
          >
            {dictionary['navigation'].foundation}
          </MenuItem>
          <MenuItem
            icon={<i className='tabler-atom' />}
            href={`${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components`}
            suffix={<i className='tabler-external-link text-xl' />}
            target='_blank'
          >
            {dictionary['navigation'].components}
          </MenuItem>
          <MenuItem
            icon={<i className='tabler-list-search' />}
            href={`${process.env.NEXT_PUBLIC_DOCS_URL}/docs/menu-examples/overview`}
            suffix={<i className='tabler-external-link text-xl' />}
            target='_blank'
          >
            {dictionary['navigation'].menuExamples}
          </MenuItem>
          <MenuItem
            icon={<i className='tabler-lifebuoy' />}
            suffix={<i className='tabler-external-link text-xl' />}
            target='_blank'
            href='https://pixinvent.ticksy.com'
          >
            {dictionary['navigation'].raiseSupport}
          </MenuItem>
          <MenuItem
            icon={<i className='tabler-book-2' />}
            suffix={<i className='tabler-external-link text-xl' />}
            target='_blank'
            href={`${process.env.NEXT_PUBLIC_DOCS_URL}`}
          >
            {dictionary['navigation'].documentation}
          </MenuItem>
          <SubMenu label={dictionary['navigation'].others} icon={<i className='tabler-box' />}>
            <MenuItem suffix={<CustomChip label='New' size='small' color='info' round='true' />}>
              {dictionary['navigation'].itemWithBadge}
            </MenuItem>
            <MenuItem
              href='https://pixinvent.com'
              target='_blank'
              suffix={<i className='tabler-external-link text-xl' />}
            >
              {dictionary['navigation'].externalLink}
            </MenuItem>
            <SubMenu label={dictionary['navigation'].menuLevels}>
              <MenuItem>{dictionary['navigation'].menuLevel2}</MenuItem>
              <SubMenu label={dictionary['navigation'].menuLevel2}>
                <MenuItem>{dictionary['navigation'].menuLevel3}</MenuItem>
                <MenuItem>{dictionary['navigation'].menuLevel3}</MenuItem>
              </SubMenu>
            </SubMenu>
            <MenuItem disabled>{dictionary['navigation'].disabledMenu}</MenuItem>
          </SubMenu>
        </MenuSection> */}
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
