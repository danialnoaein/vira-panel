// Third-party Imports
import 'react-perfect-scrollbar/dist/css/styles.css'

// Type Imports
import type { ChildrenType } from '@core/types'

// Style Imports
import '@/app/globals.css'

// Generated Icon CSS Imports
import '@assets/iconify-icons/generated-icons.css'

export const metadata = {
  title: 'داشبورد مدیریتی ویرا',
  description:
    'Vuexy - MUI Next.js Admin Dashboard Template - is the most developer friendly & highly customizable Admin Dashboard Template based on MUI v5.'
}

const RootLayout = ({ children }: ChildrenType) => {
  // Vars
  const direction = 'rtl' //i18n.langDirection[params.lang]

  return (
    <html id='__next' lang={'fa'} dir={direction}>
      <body className={`flex is-full min-bs-full flex-auto flex-col`}>{children}</body>
    </html>
  )
}

export default RootLayout
