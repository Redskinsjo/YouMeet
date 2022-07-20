import React from 'react'
import { Button } from '@mui/material'

import EmailField from './email-field'
import { EmailFormProps } from '@/types/EmailFormProps'

export default function EmailForm({
  control,
  handleSubmit,
  onSubmit,
  employeeEmail,
}: EmailFormProps) {
  return (
    <div className='w-full flex justify-center mt-16 pt-8'>
      <form className='mt-16' onSubmit={handleSubmit(onSubmit)}>
        <EmailField email={employeeEmail} name='to' />
        <EmailField control={control} name='subject' />
        <EmailField control={control} name='text' />
        <div className='w-full flex justify-end mt-8'>
          <Button
            variant='contained'
            type='submit'
            className='text-black hover:text-white'
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}
