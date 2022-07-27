import React from 'react'
import Image from 'next/future/image'
import { StaticImageData } from 'next/dist/client/image.d'
import { useTranslation } from 'react-i18next'

import people1 from '../public/people1.jpg'
import people2 from '../public/people2.jpg'

const images = {
  '../public/people1.jpg': people1,
  '../public/people2.jpg': people2,
}

const MarketingCard = ({
  firstComp,
  src,
  card,
}: {
  firstComp: 'text' | 'img'
  src: string
  card: number
}) => {
  const { t } = useTranslation()

  const image = (images as { [path: string]: StaticImageData })[src]

  return (
    <div
      className={
        firstComp === 'text'
          ? 'grid grid-cols-2 grid-areas-text border-[0.5px] border-solid border-gray-200 p-[20px] appear-slowly mobile4:flex mobile4:flex-col'
          : 'grid grid-cols-2 grid-areas-img border-[0.5px] border-solid border-gray-200 p-[20px] appear-slowly mobile4:flex mobile4:flex-col'
      }
    >
      <div className='img-area flex justify-center items-center'>
        <Image src={image} width={300} height={210} />
      </div>

      <div className='text-area bg-[#fffcf8] m-[30px] px-[15px] flex flex-col justify-center overflow-scroll'>
        <h3>{t('marketing-slogan' + card)}</h3>
        <div className='w-full h-[190px] text-[14px] box-border font-light leading-5'>
          {t('marketing-content' + card)}
        </div>
      </div>
    </div>
  )
}

export default MarketingCard
