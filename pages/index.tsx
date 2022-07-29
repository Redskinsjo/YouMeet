import React, { lazy, Suspense } from 'react'
import type { NextPage } from 'next'
import { useAuth0 } from '@auth0/auth0-react'
import Image from 'next/future/image'

import Header from '@/components/header'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import LinkCTA from '@/components/link-CTA'
import hero from '../public/hero2.jpg'
import ConnectedHomePage from '@/components/connected-home-page'

const MarketingCard = lazy(() => import('@/components/marketing-card'))

const Home: NextPage = () => {
  const { isAuthenticated, isLoading } = useAuth0()

  if (isLoading) return <></>

  if (isAuthenticated) {
    return <ConnectedHomePage />
  }

  return (
    <div className='w-full'>
      <Header />
      <div className='h-full flex flex-col justify-center items-center'>
        <div className='flex justify-center w-[90%] min-h-[350px] bg-[#2F1781] mobile4:bg-white appear-slowly my-[20px] rounded relative'>
          <div className='flex justify-center items-center absolute z-0'>
            <Image
              src={hero}
              width={500}
              height={350}
              className='h-[350px] w-[540px]'
            />
          </div>

          <div className='flex justify-between items-center flex-1 relative'>
            <Hero />
          </div>
          <div className='web2:flex-1 mobile3:w-[60px]' />
          <LinkCTA />
        </div>
        <div className='bg-gray-100 w-[90%] rounded'>
          {[1, 2].map((card) => (
            <div key={card}>
              <Suspense fallback={<div>Chargement..</div>}>
                <MarketingCard
                  firstComp={card % 2 === 0 ? 'text' : 'img'}
                  src={`../public/people${card}.jpg`}
                  card={card}
                />
              </Suspense>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
