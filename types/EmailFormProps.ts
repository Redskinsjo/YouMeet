import { UseFormHandleSubmit, Control } from 'react-hook-form'
import { FormInputs } from '@/types/FormInputs'

export interface EmailFormProps {
  control: Control<FormInputs>
  handleSubmit: UseFormHandleSubmit<FormInputs>
  onSubmit: (data: FormInputs) => void
  employeeEmail: string
}
