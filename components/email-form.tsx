import React from 'react'
import { Button } from '@mui/material'
import { UseFormHandleSubmit, Control } from 'react-hook-form'

import EmailField from './email-field'

export type FormInputs = {
  to: string
  subject: string
  text: string
}

interface EmailFormProps {
  control: Control<FormInputs>
  handleSubmit: UseFormHandleSubmit<FormInputs>
  onSubmit: (data: FormInputs) => void
}

export default function EmailForm({
  control,
  handleSubmit,
  onSubmit,
}: EmailFormProps) {
  return (
    <div className="w-full flex justify-center mt-16 pt-8">
      <form className="mt-16" onSubmit={handleSubmit(onSubmit)}>
        <EmailField control={control} name="to" />
        <EmailField control={control} name="subject" />
        <EmailField control={control} name="text" />
        <div className="w-full flex justify-end mt-8">
          <Button
            variant="contained"
            type="submit"
            className="text-black hover:text-white"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}
