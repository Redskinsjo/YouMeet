import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { BiMessageRoundedDots } from 'react-icons/bi'

const Hero = () => {
  const { t } = useTranslation()

  const [index, setIndex] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      if (index === 2) {
        setIndex(0)
      } else {
        setIndex(index + 1)
      }
    }, 1000)
  }, [index])

  return (
    <div className='flex-1 m-[20px] mobile:m-[50px] bg-[#574499] p-[15px] shadow-xl rounded'>
      <div>
        <BiMessageRoundedDots className='text-[34px] text-[#d7cDf8]' />
      </div>
      <h3 className={index === 0 ? 'bright-CTA' : 'shady-CTA'}>
        {t('heroCTA1')}
      </h3>
      <h3 className={index === 1 ? 'bright-CTA' : 'shady-CTA'}>
        {t('heroCTA2')}
      </h3>
      <h3 className={index === 2 ? 'bright-CTA' : 'shady-CTA'}>
        {t('heroCTA3')}
      </h3>
    </div>
  )
}

export default Hero
