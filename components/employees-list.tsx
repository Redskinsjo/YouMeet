import Image from 'next/image'
import moment from 'moment'
import { useCallback } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import EmailIcon from '../components/email-icon'

interface EmployeesListProps {
  data: any
}

const EmployeesList = ({ data }: EmployeesListProps) => {
  const router = useRouter()

  const formatDate = useCallback((dateMs: any) => {
    const date = new Date(dateMs)
    const year = String(date.getFullYear())
    const month =
      date.getMonth() < 10 ? '0' + date.getMonth() : String(date.getMonth())
    const day = String(date.getDate())
    return year + month + day
  }, [])

  return (
    <div className="mt-8 w-full grid grid-cols-5 justify-items-center gap-y-8">
      {data.employees.map((emp: any) => (
        <div key={emp._id} className="group">
          <div className="h-[400px] w-[300px] p-4 shadow-lg text-center bg-transparent transition-transform duration-700 perspective-1000 group-hover:rotate-y-180">
            <div className="relative w-full h-full text-center tranform-style-preserve3d backface-hidden">
              <div className="absolute h-full w-full backface-hidden group-hover:rotate-y-180">
                <Image
                  alt={emp.firstname + emp.lastname}
                  className="backface-hidden rounded-full"
                  src={emp.avatar}
                  width={200}
                  height={200}
                />
                <div className="px-2 mt-8 flex flex-col justify-around items-center">
                  <p className="text-xs">
                    Since:{' '}
                    <span className="font-bold">
                      {moment(
                        formatDate(Number(emp.starting)),
                        'YYYYMMDD'
                      ).fromNow()}
                    </span>
                  </p>
                  <p className="h-2" />
                  <p className="text-xs">
                    Email: <span className="font-bold">{emp.email}</span>
                  </p>
                  <div
                    className="h-8 w-8 mt-4 border-2 border-slate-300"
                    style={{ background: emp.color }}
                  />
                </div>
              </div>
              <div className="absolute h-full w-full rotate-y-180 invisible group-hover:visible flex flex-col">
                <h1 className="font-bold text-xl mt-8">
                  {emp.firstname + ' ' + emp.lastname}
                </h1>
                <p className="font-medium text-base">{emp.job}</p>
                <p className="mt-8 text-xs px-10 text-justify">
                  {emp.description}
                </p>
                <p className="mt-8 text-xs px-10 flex-1">
                  From: <span className="ml-2 font-bold">{emp.from}</span>
                </p>
                <EmailIcon
                  onClick={() => {
                    router.push(`./email/${emp._id}`)
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default EmployeesList
