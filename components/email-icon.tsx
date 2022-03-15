import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'

interface EmailIconProps {
  onClick: () => void
}

const EmailIcon = ({ onClick }: EmailIconProps, ref: any) => {
  return (
    <AiOutlineMail
      fontSize="28px"
      className="cursor-pointer hover:fill-slate-400"
      onClick={onClick}
    />
  )
}

export default React.forwardRef(EmailIcon)
