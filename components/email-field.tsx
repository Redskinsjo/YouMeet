import { TextField } from '@mui/material'
import { Controller } from 'react-hook-form'

import { EmailFieldProps } from '@/types/EmailFieldProps'

const EmailField = ({ control, name, email }: EmailFieldProps) => {
  return !control ? (
    <div>
      <TextField
        value={email}
        name={name}
        variant='outlined'
        label={name[0].toUpperCase() + name.slice(1)}
        multiline={name === 'text' && true}
        fullWidth
        disabled={name === 'to'}
        InputProps={{
          style: {
            height: name === 'text' ? 400 : 'inherit',
            padding: name === 'text' ? '16px' : 'inherit',
          },
        }}
        sx={{
          width: 800,
          marginBottom: '12px',
          '& textarea': {
            height: '100% !important',
          },
          boxShadow: '5px 5px 5px rgba(0,0,0,0.2)',
        }}
      />
    </div>
  ) : (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, name } }) => {
        return (
          <div>
            <TextField
              onChange={(e) => onChange(e.target.value)}
              value={value}
              name={name}
              variant='outlined'
              label={name[0].toUpperCase() + name.slice(1)}
              multiline={name === 'text' && true}
              fullWidth
              disabled={name === 'to'}
              InputProps={{
                style: {
                  height: name === 'text' ? 400 : 'inherit',
                  padding: name === 'text' ? '16px' : 'inherit',
                },
              }}
              sx={{
                width: 800,
                marginBottom: '12px',
                '& textarea': {
                  height: '100% !important',
                },
                boxShadow: '5px 5px 5px rgba(0,0,0,0.2)',
              }}
            />
          </div>
        )
      }}
    />
  )
}

export default EmailField
