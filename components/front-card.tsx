import React from 'react'
import Image from 'next/image'
import moment from 'moment'

import { formatDate } from '@/utils/formats'
import { Employee } from '@/generated'

type FrontCardType = {
  emp: Employee
  lockedCards: string[]
}

const FrontCard = ({ emp, lockedCards }: FrontCardType) => {
  return (
    <div
      className={
        lockedCards.includes(emp.id)
          ? 'absolute h-full w-full backface-hidden group-hover:invisible invisible'
          : 'absolute h-full w-full backface-hidden group-hover:invisible'
      }
    >
      <Image
        alt={emp.firstname + emp.lastname}
        className="backface-hidden rounded-full"
        src={emp.avatar}
        width={200}
        height={200}
      />
      <div className="px-2 mt-8 flex flex-col justify-around items-center">
        <p className="text-xs" data-test="since">
          Since:{' '}
          <span className="font-bold">
            {moment(formatDate(Number(emp.starting)), 'YYYYMMDD').fromNow()}
          </span>
        </p>
        <p className="h-2" />
        <p className="text-xs" data-test="email">
          Email: <span className="font-bold">{emp.email}</span>
        </p>
      </div>
    </div>
  )
}

export default FrontCard
