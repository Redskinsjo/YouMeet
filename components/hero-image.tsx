import React from 'react'

import Image from 'next/future/image'

const HeroImage = () => {
  return (
    <div className='relative mx-[40px] flex-1 flex justify-center'>
      <div className='w-[120px] h-[105px] mobile3:media-mobile3-hero-image mobile2:media-mobile2-hero-image web2:media-web2-hero-image web:media-web-hero-image p-[4px] shadow-md rounded bg-white relative'>
        <div className='w-[120px] h-[105px] mobile3:media-mobile3-hero-image mobile2:media-mobile2-hero-image web2:media-web2-hero-image web:media-web-hero-image shadow-md absolute z-0'>
          <Image
            src={'/../public/hero.png'}
            width={400}
            height={350}
            className='absolute z-0 w-[120px] h-[105px] mobile3:media-mobile3-hero-image mobile2:media-mobile2-hero-image web2:media-web2-hero-image web:media-web-hero-image '
          />
        </div>
        <div className='w-[120px] h-[105px] mobile3:media-mobile3-hero-image mobile2:media-mobile2-hero-image web2:media-web2-hero-image web:media-web-hero-image shadow-md rounded absolute z-10 bg-gray-500 opacity-50 hover:discover-slowly hover:opacity-0' />
      </div>
    </div>
  )
}

export default HeroImage
