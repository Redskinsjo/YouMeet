import React from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { Button } from '@mui/material'

const Locale = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const router = useRouter()
  const { i18n } = useTranslation()

  const handleClick = (event: any, type: 'logout' | 'lang') => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className='h-full'>
      <div
        className='flex items-center h-[32px] border-box'
        onClick={(e) => handleClick(e, 'lang')}
        onMouseEnter={(e) => handleClick(e, 'lang')}
      >
        <Button
          sx={{
            height: '100%',
          }}
        >
          {i18n.language}
        </Button>
      </div>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {router.locales?.map((l: string) => (
          <MenuItem
            key={l}
            onClick={() => {
              i18n?.changeLanguage(l)
              handleClose()
            }}
          >
            {l.toUpperCase()}
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}
export default Locale
