import React, { useState } from 'react'
import { Button } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { RiLoader4Fill } from 'react-icons/ri'

const LinkCTA = () => {
  const { t } = useTranslation()

  const [linkClicked, setLinkClicked] = useState(false)

  return (
    <div className='flex-1 web:mt-[30px] flex justify-center items-center'>
      {linkClicked ? (
        <Button
          variant='contained'
          className='bg-[#A79DC8] hover:bg-[#2F1781] border-2 border-white border-solid'
          startIcon={<RiLoader4Fill className='animate-spin' />}
        >
          Loading
        </Button>
      ) : (
        <Button
          variant='contained'
          className='bg-[#A79DC8] hover:bg-[#2F1781] border-2 border-white border-solid'
          onClick={() => setLinkClicked(true)}
        >
          {t('heroCTA-link')}
        </Button>
      )}
    </div>
  )
}

export default LinkCTA
