import React from 'react'
import { BsFillPersonFill } from 'react-icons/bs'
import Image from 'next/image'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { Button } from '@mui/material'
import Link from 'next/link'
import { BiLogInCircle } from 'react-icons/bi'
import { useTranslation } from 'react-i18next'
import { useAuth0 } from '@auth0/auth0-react'

import Logo from '@/public/logo_transparent.png'
import LocaleChoice from '@/components/locale'

interface HeaderComponentProps {
  classes?: string
}

export default function HeaderComponent({ classes }: HeaderComponentProps) {
  const [anchorEl, setAnchorEl] = React.useState<
    | undefined
    | {
        el: EventTarget
        type: string
      }
  >(undefined)
  const open = anchorEl
  const { t } = useTranslation()
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0()

  const handleClick = (event: any, type: 'logout' | 'lang') => {
    setAnchorEl({ el: event.currentTarget, type })
  }
  const handleClose = () => {
    setAnchorEl(undefined)
  }

  return (
    <div
      className={`flex justify-between items-center py-4 px-4 shadow-lg h-16 bg-slate-50 ${classes} fixed w-full box-border z-10 top-0 relative z-30`}
      data-test='header'
    >
      <Link href='/' passHref>
        <div className='flex items-center'>
          <Image
            src={Logo}
            alt='logo'
            height='55px'
            width='150px'
            className='cursor-pointer'
          />
        </div>
      </Link>
      {isAuthenticated ? (
        <div>
          <div
            className={
              open
                ? 'flex items-center p-2 bg-blue-50 rounded cursor-pointer'
                : 'flex items-center p-2'
            }
            onClick={(e) => handleClick(e, 'logout')}
            onMouseEnter={(e) => {
              handleClick(e, 'logout')
            }}
          >
            <BsFillPersonFill style={{ fontSize: 28, marginRight: 15 }} />
            <div>{user?.name}</div>
          </div>
          <Menu
            id='basic-menu'
            anchorEl={anchorEl && (anchorEl.el as Element)}
            open={open !== undefined && open.type === 'logout'}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={() => logout()}>Logout</MenuItem>
          </Menu>
        </div>
      ) : (
        <div className='flex border-box h-full'>
          <LocaleChoice />
          <Button
            className='flex items-center text-white bg-[#574499] capitalize'
            endIcon={<BiLogInCircle className='icon' />}
            sx={{
              ':hover': {
                backgroundColor: '#D6D2E6',
                color: '#2D1783',
              },
            }}
            onClick={() => loginWithRedirect()}
          >
            {t('login')}
          </Button>
        </div>
      )}
    </div>
  )
}
