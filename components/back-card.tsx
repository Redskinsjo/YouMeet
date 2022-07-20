import React, { Dispatch, SetStateAction } from 'react'
import { AiFillLock, AiFillUnlock } from 'react-icons/ai'
import { useRouter } from 'next/router'

import EmailIcon from '@/components/email-icon'
import { Employee } from '@/generated'

type BackCardType = {
  emp: Employee
  lockedCards: string[]
  setLockedCards: Dispatch<SetStateAction<string[]>>
}

const BackCard = ({ emp, lockedCards, setLockedCards }: BackCardType) => {
  const router = useRouter()

  return (
    <div
      className={
        lockedCards.includes(emp.id)
          ? 'absolute h-full w-full flex flex-col visible'
          : 'absolute h-full w-full invisible group-hover:visible flex flex-col group-hover:appear-slowly'
      }
      data-test="card-back"
    >
      <div className="w-full flex justify-end">
        {lockedCards.includes(emp.id) ? (
          <AiFillUnlock
            className="cursor-pointer"
            onClick={() => {
              const copy = [...lockedCards]
              const index = copy.findIndex((el) => el === emp.id)
              copy.splice(index, 1)
              setLockedCards(copy)
            }}
          />
        ) : (
          <AiFillLock
            className="cursor-pointer"
            onClick={() => {
              setLockedCards([...lockedCards, emp.id])
              console.log(emp.color)
            }}
          />
        )}
      </div>
      <h1 className="font-bold text-xl mt-6">
        {emp.firstname + ' ' + emp.lastname}
      </h1>
      <p className="font-medium text-base">{emp.job}</p>
      <p className="mt-8 text-xs px-10 text-justify">{emp.description}</p>
      <p className="mt-8 text-xs px-10 flex-1" data-test="from">
        From: <span className="ml-2 font-bold">{emp.from}</span>
      </p>
      <EmailIcon
        onClick={() => {
          router.push(`./email/${emp.id}/send`)
        }}
      />
    </div>
  )
}

export default BackCard
