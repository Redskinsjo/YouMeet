import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Employee {
  _id: string
  fullname: string
  firstname: string
  lastname: string
  email: string
  avatar: string
  color: string
  from: string
  lat: number
  long: number
  starting: string
  job: string
  description: string
}

export interface AppState {
  employees: Array<Employee>
  loading: boolean
}

const initialState: AppState = {
  employees: [],
  loading: false,
}

export const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    fetchingEmployees: (state) => {
      state.loading = true
    },
    setEmployees: (state, action: PayloadAction<Employee[]>) => {
      state.employees = action.payload
      state.loading = false
    },
  },
})

// Action creators are generated for each case reducer function
export const { fetchingEmployees, setEmployees } = employeesSlice.actions

export default employeesSlice.reducer