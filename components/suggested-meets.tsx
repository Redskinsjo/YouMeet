import { Employee } from '@/generated'
import React, { useState } from 'react'

import FrontCard from './front-card'
import BackCard from './back-card'
import { GetEmployeesQuery } from '../generated'

type SuggestedMeetsType = {
  data: GetEmployeesQuery | undefined
}

const SuggestedMeets = ({ data }: SuggestedMeetsType) => {
  const [lockedCards, setLockedCards] = useState<string[]>([])

  return (
    <div className="mt-8 w-full flex flex-wrap justify-center">
      {data?.employees?.map((emp: any) => (
        <div key={emp.id} className="group min-w-[220px]" data-test="card">
          <div
            className={`absolute w-0 h-0 border-r-[20px] border-solid border-t-[20px] border-b-[20px] border-l-0 border-t-transparent border-b-transparent rotate-90-deg`}
            style={{ borderRightColor: emp.color }}
          />
          <div className="h-[400px] w-[300px] p-4 shadow-lg text-center bg-transparent transition-transform duration-300 perspective-1000 ">
            <div className="relative w-full h-full text-center tranform-style-preserve3d backface-hidden">
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
  )
}

export default SuggestedMeets
