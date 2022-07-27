import { Control } from 'react-hook-form'
import { FormInputs } from '@/types/FormInputs'

export interface EmailFieldProps {
  control?: Control<FormInputs>
  name: 'text' | 'from' | 'to' | 'subject'
  email?: string
  children?: any
}
