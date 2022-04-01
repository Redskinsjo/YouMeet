import React from 'react'
import { BsFillPersonFill } from 'react-icons/bs'
import { useSelector, useDispatch } from 'react-redux'
import Image from 'next/image'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'

import { setUsername } from '@/redux/features/userSlice'

interface HeaderComponentProps {
  classes?: string
}

export default function HeaderComponent({ classes }: HeaderComponentProps) {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const dispatch = useDispatch()
  const router = useRouter()
  const { data: session } = useSession()

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const logout = () => {
    signOut()
    dispatch(setUsername(''))
    router.replace('/login')
  }

  return (
    <div
      className={`flex justify-between items-center py-4 px-8 shadow-lg h-16 bg-slate-50 ${classes} fixed w-full z-10 top-0`}
    >
      <Link href="/" passHref>
        <div className="flex items-center">
          <Image
            src="@/public/logo_transparent.png"
            alt="logo"
            height="55px"
            width="150px"
            className="cursor-pointer"
          />
        </div>
      </Link>
      {session && (
        <div>
          <div
            className="flex items-center p-2"
            onClick={handleClick}
            onMouseEnter={handleClick}
          >
            <BsFillPersonFill style={{ fontSize: 28, marginRight: 15 }} />
            <div>{session?.user?.name}</div>
          </div>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={logout}>Logout</MenuItem>
          </Menu>
        </div>
      )}
    </div>
  )
}
