import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  setEmployees,
  fetchingEmployees,
} from '@/redux/features/employeesSlice'
import { useQuery } from '@apollo/client'

import EmployeesList from '@/components/employees-list'
import Search from '@/components/search'
import { GetEmployeesDocument } from '../generated'
import { RootState } from '@/redux/store'

const AllEmployees = () => {
  const dispatch = useDispatch()
  const { employees, loading } = useSelector(
    (state: RootState) => state.employees
  )
  const { refetch } = useQuery(GetEmployeesDocument, {
    variables: { filter: '', sort: 2 },
    nextFetchPolicy: 'cache-first',
  })

  const [search, setSearch] = useState('')
  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value)
  const [criteria, setCriteria] = useState<number>(2)
  const handleChangeCriteria = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCriteria(Number(e.target.value))

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchingEmployees())
      const empl = await refetch({
        filter: search,
        sort: criteria,
      })
      dispatch(setEmployees(empl.data.employees))
    }
    fetchData()
  }, [criteria, search])

  return (
    <div className='mt-8 flex flex-col items-center bg-gradient-to-l from-violet-500'>
      <div className='flex justify-start items-center w-[90%]'>
        <h2 className='underline'>All Employees</h2>
      </div>

      <div className='h-[80px] flex justify-center items-center bg-purple-200 px-6 rounded-xl shadow-inner'>
        <Search
          search={search}
          handleChangeSearch={handleChangeSearch}
          criteria={criteria}
          handleChangeCriteria={handleChangeCriteria}
        />
      </div>
      {!loading && <EmployeesList data={employees} />}
    </div>
  )
}

export default AllEmployees
