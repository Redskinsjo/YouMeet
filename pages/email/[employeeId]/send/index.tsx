import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { IoMdSend } from 'react-icons/io'
import { BiArrowToRight } from 'react-icons/bi'
import { TiArrowBack } from 'react-icons/ti'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useQuery } from '@apollo/client'
import { ClipLoader } from 'react-spinners'
import emailjs from '@emailjs/browser'
import { useAuth0 } from '@auth0/auth0-react'

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
import EmailForm, { FormInputs } from '@/components/email-form'
import EmailEmployeeProfile from '@/components/email-employee-profile'
import { GetSendEmailDataDocument } from '@/generated'

const EmailMe: NextPage = () => {
  const router = useRouter()
  const { data: employee } = useQuery(GetSendEmailDataDocument, {
    variables: {
      id: router.query.employeeId as string,
    },
  })
  const [open, setOpen] = useState(false)
  const { user, isAuthenticated } = useAuth0()

  const toggleDrawer = (action: boolean) => setOpen(action)
  const { control, reset, handleSubmit } = useForm<FormInputs>({
    defaultValues: {
      to: '',
      subject: '',
      text: '',
    },
  })

  const onSubmit: SubmitHandler<FormInputs> = async (
    data: FormInputs
  ): Promise<void> => {
    const recipients = data.to.split(',')

    Promise.all(
      recipients.map((recipient: string) => {
        const templateParams = {
          to_name: user?.name,
          original_recipient:
            employee?.oneEmployee.firstname +
            ' ' +
            employee?.oneEmployee.lastname,
          subject: data.subject,
          text: data.text,
          to: recipient,
        }

        return emailjs.send(
          `${process.env.EMAILJS_SERVICEID}`,
          `${process.env.EMAILJS_TEMPLATEID}`,
          templateParams,
          `${process.env.EMAILJS_USERID}`
        )
      })
    ).then(() => {
      reset({
        to: `${user?.email},Jonathan.carnos@gmail.com`,
        subject: '',
        text: '',
      })
      router.push('/')
    })
  }

  useEffect(() => {
    if (employee) {
      reset({
        to: `${user?.email},Jonathan.carnos@gmail.com`,
        subject: '',
        text: '',
      })
    }
  }, [employee])

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
              disabled={!isSendEmail}
              key={text}
              onClick={
                isSendEmail
                  ? () => {
                      router.replace(`/email/${router.query.employeeId}/send`)
                    }
                  : // eslint-disable-next-line @typescript-eslint/no-empty-function
                    () => {}
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
            <ListItem disabled={!isSendEmail} button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <AiOutlineMail /> : <IoMdSend />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
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
    <div className="h-full w-full flex flex-col">
      <Header />
      <Drawer anchor="left" open={open} onClose={() => toggleDrawer(false)}>
        {list()}
      </Drawer>
      <div className="flex">
        {!open && (
          <div
            className="relative left-0 h-full min-w-[70px] mt-16 bg-slate-50 hover:bg-slate-100 flex justify-center items-center cursor-pointer"
            onClick={() => toggleDrawer(true)}
          >
            <BiArrowToRight fontSize="24px" />
          </div>
        )}
        {employee && (
          <EmailForm
            control={control}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            employeeEmail={employee.oneEmployee.email}
          />
        )}
        <EmailEmployeeProfile />
      </div>
    </div>
  ) : (
    <div className="w-full h-full flex justify-center items-center">
      <ClipLoader size={66} />
    </div>
  )
}

export default EmailMe
