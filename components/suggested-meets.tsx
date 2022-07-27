import React, { useState, useEffect } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

import BackCard from './back-card'
import FrontCard from './front-card'
import { Employee } from '@/generated'
import { EmployeesListProps } from '@/types/EmployeesListProps'

const EmployeesList = ({ data }: EmployeesListProps) => {
  const [lockedCards, setLockedCards] = useState<string[]>([])
  const [displayedCards, setDisplayedCards] = useState<Employee[] | undefined>(
    []
  )
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const cards = data?.employees?.slice(offset * 5, (offset + 1) * 5)
    setDisplayedCards(cards)
  }, [offset, data])

  return (
    <div className='mt-8 flex flex-col items-center bg-suggested-employees pb-8 overflow-hidden overflow-x-scroll hide-scrollbar'>
      <div className='flex justify-start items-center w-[90%] text-suggested-employees'>
        <h2>Suggested Employees</h2>
        <AiOutlinePlus
          className='text-[38px] cursor-pointer hover:bg-[#7E70B0] hover:text-white rounded mx-4'
          onClick={() => {
            if (
              data?.employees &&
              5 + offset * 5 + 5 <= data?.employees?.length
            )
              setOffset(offset + 1)
            else setOffset(0)
          }}
        />
      </div>
      <div className='max-w-full flex overflow-hidden overflow-x-scroll scroll-smooth hide-scrollbar pl-[300px]'>
        {displayedCards?.map((emp: Employee) => (
          <div
            key={emp.id}
            className='group min-w-[332px] appear-fastly bg-white m-[1px] relative'
            data-test='card'
          >
            <div
              className='absolute top-[-9px] w-0 h-0 border-r-[20px] border-solid border-t-[20px] border-b-[20px] border-l-0 border-t-transparent border-b-transparent rotate-90-deg'
              style={{ borderRightColor: emp.color }}
            />
            <div className='h-[400px] w-[300px] p-[16px] shadow-lg text-center bg-transparent transition-transform duration-300 perspective-1000 '>
              <div className='relative w-full h-full text-center tranform-style-preserve3d backface-hidden'>
                <FrontCard emp={emp} lockedCards={lockedCards} />
                <BackCard
                  emp={emp}
                  lockedCards={lockedCards}
                  setLockedCards={setLockedCards}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EmployeesList
