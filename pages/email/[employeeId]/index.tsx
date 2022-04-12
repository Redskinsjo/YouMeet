import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { IoMdSend } from 'react-icons/io'
import { BiArrowToRight } from 'react-icons/bi'
import { TiArrowBack } from 'react-icons/ti'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useQuery } from '@apollo/client'
import { useSession } from 'next-auth/react'

import Header from '@/components/header'
import {
  Drawer,
  List,
  ListItemButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material'
import { GetSendEmailData } from '@/apollo/queries'
import EmailForm, { FormInputs } from '@/components/email-form'

const EmailMe = () => {
  const router = useRouter()
  const { data } = useQuery(GetSendEmailData, {
    variables: {
      id: router.query.employeeId,
    },
  })
  const [open, setOpen] = useState(false)
  const { data: session } = useSession()

  useEffect(() => {
    if (!session) {
      router.push('/login')
    }
  }, [])

  const toggleDrawer = (action: any) => setOpen(action)
  const { control, reset, handleSubmit } = useForm<FormInputs>({
    defaultValues: {
      to: '',
      subject: '',
      text: '',
    },
  })

  const onSubmit: SubmitHandler<FormInputs> = (data: any) => {
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

  const list = () => (
    <div
      style={{ width: 250 }}
      role="presentation"
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
                  : () => {}
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

  return (
    <div className="h-full w-full flex flex-col">
      <Header />
      <Drawer anchor="left" open={open} onClose={() => toggleDrawer(false)}>
        {list()}
      </Drawer>
      <div className="flex flex-1">
        {!open && (
          <div
            className="relative left-0 h-full w-16 mt-16 bg-slate-50 hover:bg-slate-100 flex justify-center items-center cursor-pointer"
            onClick={() => toggleDrawer(true)}
          >
            <BiArrowToRight fontSize="24px" />
          </div>
        )}
      </div>
    </div>
  )
}

export default EmailMe
