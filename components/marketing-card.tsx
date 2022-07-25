import React from 'react'
import Image from 'next/future/image'
import { useTranslation } from 'react-i18next'

const MarketingCard = ({
  firstComp,
  src,
  card
}: {
  firstComp: 'text' | 'img'
  src: string
  card: number
}) => {
  const { t } = useTranslation()

  return (
    <div
      className={
        firstComp === 'text'
          ? 'grid grid-cols-2 grid-areas-text border-[0.5px] border-solid border-gray-200 p-[20px] appear-slowly'
          : 'grid grid-cols-2 grid-areas-img border-[0.5px] border-solid border-gray-200 p-[20px] appear-slowly'
      }
    >
      <div className='img-area flex justify-center items-center'>
        <Image src={src} width={300} height={210} />
      </div>

      <div className='text-area bg-[#fffcf8] m-[30px] px-[15px] flex flex-col justify-center'>
        <h3>{t('marketing-slogan' + card)}</h3>
        <div className='w-full h-[190px] text-[14px] box-border font-light leading-5'>
          {t('marketing-content' + card)}
        </div>
      </div>
    </div>
  )
}

export default MarketingCard
