/* eslint-disable no-empty-pattern */
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Menu, MenuItem } from '@mui/material'
import { Button } from '@mui/material'

const Locale = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

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
            height: '100%'
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
          'aria-labelledby': 'basic-button'
        }}
      >
        {['en', 'fr'].map((l: string) => (
          <MenuItem
            key={l}
            onClick={() => {
              i18n?.changeLanguage(l)
              handleClose()
            }}
            aria-label={l === 'fr' ? 'locale-menuitem' : undefined}
          >
            {l.toUpperCase()}
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}
export default Locale
