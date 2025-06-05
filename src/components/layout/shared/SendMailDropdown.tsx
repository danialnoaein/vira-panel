'use client'

// React Imports
import { useRef, useState, useEffect } from 'react'

// MUI Imports
import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge'
import Popper from '@mui/material/Popper'
import Fade from '@mui/material/Fade'
import Paper from '@mui/material/Paper'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import useMediaQuery from '@mui/material/useMediaQuery'
import type { ButtonProps } from '@mui/material/Button'
import Button from '@mui/material/Button'
import type { Theme } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import InputAdornment from '@mui/material/InputAdornment'

// Third Party Components
import classnames from 'classnames'

// Config Imports
import { MenuItem } from '@mui/material'

import themeConfig from '@configs/themeConfig'

// Hook Imports
import { useSettings } from '@core/hooks/useSettings'

// Components Imports
import CustomTextField from '@core/components/mui/TextField'
import Form from '@components/Form'
import SendMail from '@/components/dialogs/send-mail'
import OpenDialogOnElementClick from '@/components/dialogs/OpenDialogOnElementClick'

type FormDataType = {
  username: string
  email: string
  password: string
  isPasswordShown: boolean
  confirmPassword: string
  isConfirmPasswordShown: boolean
  firstName: string
  lastName: string
  country: string
  language: string[]
  date: Date | null
  phoneNumber: string
}

const SendMailDropdown = () => {
  // States
  const buttonProps: ButtonProps = {
    variant: 'contained',
    className: 'text-textPrimary',
    children: (
      <Badge
        color='error'
        className='cursor-pointer'
        overlap='circular'
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <i className='tabler-send' />
      </Badge>
    )
  }

  return <OpenDialogOnElementClick element={IconButton} elementProps={buttonProps} dialog={SendMail} />
}

export default SendMailDropdown
