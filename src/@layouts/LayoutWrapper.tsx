'use client'

import type { ReactElement } from 'react'

import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

// React Imports

// Type Imports
import type { SystemMode } from '@core/types'

// Hook Imports
import { useSettings } from '@core/hooks/useSettings'
import useLayoutInit from '@core/hooks/useLayoutInit'

type LayoutWrapperProps = {
  systemMode: SystemMode
  verticalLayout: ReactElement
  horizontalLayout: ReactElement
}

const LayoutWrapper = (props: LayoutWrapperProps) => {
  // Props
  const { systemMode, verticalLayout, horizontalLayout } = props

  // Hooks
  const { settings } = useSettings()

  useLayoutInit(systemMode)

  const queryClient = new QueryClient()

  // Return the layout based on the layout context
  return (
    <div className='flex flex-col flex-auto' data-skin={settings.skin}>
      <QueryClientProvider client={queryClient}>
        {settings.layout === 'horizontal' ? horizontalLayout : verticalLayout}
      </QueryClientProvider>
    </div>
  )
}

export default LayoutWrapper
