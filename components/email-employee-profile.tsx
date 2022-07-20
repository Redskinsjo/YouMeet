import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import Image from 'next/image'
import moment from 'moment'

import MapboxMap from '@/components/mapbox-map'
import countries from '@/countriesLatLong.json'
import { formatDate } from '@/utils/formats'

import { GetEmailProfileDataDocument } from '@/generated'

export default function EmailEmployeeProfile() {
  const router = useRouter()
  const { data } = useQuery(GetEmailProfileDataDocument, {
    variables: {
      id: router.query.employeeId as string,
    },
  })
  const [latLong, setLatLong] = useState<number[] | []>([])

  useEffect(() => {
    if (data) {
      const country = countries.ref_country_codes.find((country: any) => {
        return country.country === data.oneEmployee?.from
      })
      const coords = []
      if (country) {
        coords.push(country.longitude)
        coords.push(country.latitude)
      }
      setLatLong(coords)
    }
  }, [data])
  return (
    <div className="w-full flex flex-col items-center mt-16 w-[900px] shadow-xl">
      {data && (
        <div className="w-full flex border-b-2">
          <div className="flex-1 mx-16 mb-8">
            <h1 className="text-3xl mt-8 font-bold text-center">
              {data.oneEmployee?.firstname} {data.oneEmployee?.lastname}
            </h1>
            <h3 className="text-lg text-center">{data.oneEmployee?.job}</h3>
            <p className="text-sm mt-4">{data.oneEmployee?.description}</p>
            <p className="text-sm mt-4">
              Started work{' '}
              <span className="font-bold">
                {moment(
                  formatDate(Number(data.oneEmployee?.starting)),
                  'YYYYMMDD'
                ).fromNow()}
              </span>
            </p>
            <p className="mt-4 text-sm">
              From:{' '}
              <span className="ml-2 font-bold">{data.oneEmployee?.from}</span>
            </p>
          </div>
          <div className="mr-8 mt-8">
            <Image
              src={data.oneEmployee.avatar}
              alt={
                data.oneEmployee?.firstname + ' ' + data.oneEmployee?.lastname
              }
              width={120}
              height={120}
            />
          </div>
        </div>
      )}
      {data && (
        <div
          className={`justify-center flex pt-8 w-full h-full`}
          style={{
            background: `linear-gradient(#fff, ${data.oneEmployee?.color})`,
          }}
        >
          {latLong.length !== 0 && (
            <MapboxMap
              center={latLong}
              zoom={4}
              styles={{
                width: 350,
                height: 350,
                margin: 20,
                borderRadius: 20,
                border: '1px solid black',
              }}
            />
          )}
        </div>
      )}
    </div>
  )
}
