import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Employee } from '../../generated'

export interface AppState {
  employees: Employee[] | undefined | null
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
    setEmployees: (
      state,
      action: PayloadAction<Employee[] | undefined | null>
    ) => {
      state.employees = action.payload
      state.loading = false
    },
  },
})

// Action creators are generated for each case reducer function
export const { fetchingEmployees, setEmployees } = employeesSlice.actions

export default employeesSlice.reducer
