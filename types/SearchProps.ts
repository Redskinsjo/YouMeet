import React from 'react'

export interface SearchProps {
  search: string
  handleChangeSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
  criteria: number
  handleChangeCriteria: (e: React.ChangeEvent<HTMLInputElement>) => void
}
