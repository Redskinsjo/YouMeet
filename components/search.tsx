import React from 'react'

import { InputAdornment, Input, TextField, MenuItem } from '@mui/material'
import { AiOutlineSearch } from 'react-icons/ai'

import { SearchProps } from '@/types/SearchProps'

const criterias = [
  { value: 2, label: 'Default' },
  { value: -1, label: 'Asc' },
  { value: 1, label: 'Desc' },
]

export default function Search({
  search,
  handleChangeSearch,
  criteria,
  handleChangeCriteria,
}: SearchProps) {
  return (
    <div className='flex h-12'>
      <Input
        value={search}
        onChange={handleChangeSearch}
        startAdornment={
          <InputAdornment position='start'>
            <AiOutlineSearch />
          </InputAdornment>
        }
        disableUnderline
        sx={{
          border: '1px solid black',
          padding: '4px',
          borderRadius: '5px',
          margin: '4px',
          height: 40,
        }}
        inputProps={{ 'data-testid': 'search-input' }}
      />
      <div className='flex items-center'>
        <span>Sort by Career Start:</span>
        <TextField
          sx={{ width: 120, '& > div': { height: 40 } }}
          select
          value={criteria}
          onChange={handleChangeCriteria}
          SelectProps={{ inputProps: { 'data-testid': 'criteria-select' } }}
        >
          {criterias.map((opt) => (
            <MenuItem key={opt.value} value={opt.value}>
              {opt.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </div>
  )
}
