import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'

import { EmailIconProps } from '@/types/EmailIconProps'

const EmailIcon = ({ onClick }: EmailIconProps) => {
  return (
    <AiOutlineMail
      fontSize='28px'
      className='cursor-pointer hover:fill-slate-400'
      onClick={onClick}
    />
  )
}

export default EmailIcon
