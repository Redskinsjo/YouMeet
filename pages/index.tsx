import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useQuery } from '@apollo/client'
import { useAuth0 } from '@auth0/auth0-react'

import Header from '@/components/header'
import MapboxMap from '@/components/mapbox-map'
import SuggestedMeets from '@/components/suggested-meets'
import Footer from '@/components/footer'
import { GetEmployeesDocument } from '../generated'
import AllEmployees from '@/components/all-employees'

const Home: NextPage = () => {
  const { data } = useQuery(GetEmployeesDocument, {
    variables: { filter: '', sort: 2 },
    nextFetchPolicy: 'cache-first'
  })
  const { user, isAuthenticated } = useAuth0()

  return (
    <div className='w-full'>
      <Header />
      {isAuthenticated && user && (
        <div className='h-full'>
          <Head>
            <title>YouMeet</title>
            <meta name='description' content='Generated by create next app' />
            <link rel='icon' href='/logo-favicon.png' />
          </Head>
          <div
            className='w-full flex justify-center mt-16'
            style={{ background: 'linear-gradient(rgba(0,0,0,0.1),#FFF)' }}
          >
            <MapboxMap
              center={[3, 33]}
              zoom={1.5}
              employees={data?.employees}
              styles={{
                width: '80%',
                minHeight: '800px',
                margin: 20,
                borderRadius: 20,
                border: '1px solid black'
              }}
            />
          </div>
          <SuggestedMeets data={data} />
          {/* <div className='relative top-[50px] z-0 oblique bg-gradient-to-l from-violet-500 h-[60px]' /> */}
          <AllEmployees />
          <Footer />
        </div>
      )}
    </div>
  )
}

export default Home
