import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface AppState {
  username: string
}

const initialState: AppState = {
  username: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.username = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUsername } = userSlice.actions

export default userSlice.reducer
