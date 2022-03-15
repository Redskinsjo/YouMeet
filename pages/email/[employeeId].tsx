import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { IoMdSend } from 'react-icons/io'
import { BiArrowToRight } from 'react-icons/bi'
import { useForm } from 'react-hook-form'
import { useQuery } from '@apollo/client'

import Header from '../../components/header'
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material'
import EmailField from '../../components/email-field'
import { GetOneEmployee } from '../../apollo/queries'

const EmailMe = () => {
  const router = useRouter()
  const { data } = useQuery(GetOneEmployee, {
    variables: {
      id: router.query.employeeId,
    },
  })
  console.log(data)
  const [open, setOpen] = useState(false)
  console.log(router)
  const toggleDrawer = (action: any) => setOpen(action)
  const { control, reset, handleSubmit } = useForm({
    defaultValues: {
      to: '',
      subject: '',
      text: '',
    },
  })

  const onSubmit = (data: any) => {
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
    // window.open(`mailto:${"jonthan.carnos@gmail.com"}`);
    // window.prompt("to:", "Jonathan.carnos@gmail.com");
  }, [data])

  const list = () => (
    <div
      style={{ width: 250 }}
      role="presentation"
      onClick={() => toggleDrawer(false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <AiOutlineMail /> : <IoMdSend />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <AiOutlineMail /> : <IoMdSend />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
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
        <form className="mt-16" onSubmit={handleSubmit(onSubmit)}>
          <EmailField control={control} name="to" />
          <EmailField control={control} name="subject" />
          <EmailField control={control} name="text" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default EmailMe
