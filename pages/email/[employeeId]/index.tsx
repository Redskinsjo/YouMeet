import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { IoMdSend } from 'react-icons/io'
import { BiArrowToRight } from 'react-icons/bi'
import { TiArrowBack } from 'react-icons/ti'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useQuery } from '@apollo/client'
import { useAuth0 } from '@auth0/auth0-react'
import { ClipLoader } from 'react-spinners'

import Header from '@/components/header'
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material'
import { FormInputs } from '@/types/FormInputs'

import { GetSendEmailDataDocument } from '@/generated'

const EmailMe = () => {
  const router = useRouter()
  const { data } = useQuery(GetSendEmailDataDocument, {
    variables: {
      id: router.query.employeeId as string | undefined,
    },
  })
  const [open, setOpen] = useState(false)
  const { user, isAuthenticated } = useAuth0()

  const toggleDrawer = (action: boolean) => setOpen(action)
  const { reset } = useForm<FormInputs>({
    defaultValues: {
      to: '',
      subject: '',
      text: '',
    },
  })

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit: SubmitHandler<FormInputs> = (data: FormInputs): void => {
    console.log(data)
  }

  useEffect(() => {
    if (data) {
      reset({
        to: data.oneEmployee.email,
        subject: '',
        text: '',
      })
    }
  }, [data])

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace('/')
    }
  }, [])

  const list = () => (
    <div
      style={{ width: 250 }}
      role='presentation'
      onClick={() => toggleDrawer(false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => {
          const isSendEmail = text === 'Send email'
          return (
            <ListItemButton
              key={text}
              disabled={!isSendEmail}
              onClick={
                isSendEmail
                  ? () => router.push(`/email/${router.query.employeeId}/send`)
                  : () => ({})
              }
            >
              <ListItemIcon>
                {index % 2 === 0 ? <AiOutlineMail /> : <IoMdSend />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          )
        })}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => {
          const isSendEmail = text === 'Send email'
          return (
            <ListItemButton key={text} disabled={!isSendEmail}>
              <ListItemIcon>
                {index % 2 === 0 ? <AiOutlineMail /> : <IoMdSend />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          )
        })}
      </List>
      <Divider />
      <ListItemButton key={'nav-back'} onClick={() => router.back()}>
        <ListItemIcon>
          <TiArrowBack />
        </ListItemIcon>
        <ListItemText primary={'Go back'} />
      </ListItemButton>
    </div>
  )

  return isAuthenticated ? (
    <div className='h-full w-full flex flex-col'>
      <Header />
      <Drawer anchor='left' open={open} onClose={() => toggleDrawer(false)}>
        {list()}
      </Drawer>
      <div className='flex flex-1'>
        {!open && (
          <div
            className='relative left-0 h-full w-16 mt-16 bg-slate-50 hover:bg-slate-100 flex justify-center items-center cursor-pointer'
            onClick={() => toggleDrawer(true)}
          >
            <BiArrowToRight fontSize='24px' />
          </div>
        )}
      </div>
    </div>
  ) : (
    <div className='w-full h-full flex justify-center items-center'>
      <ClipLoader size={66} />
    </div>
  )
}

export default EmailMe
