import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '@mui/material'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { MdFacebook } from 'react-icons/md'
import { AiFillGoogleCircle } from 'react-icons/ai'

import Field from './field'
import { setUsername } from '../redux/slice'

interface LoginFormProps {
  dispatch: any
  providers: any
}

const styles = {
  padding: '8px 0px',
  marginBottom: '12px',
  width: '100%',
}

const nodeEl: any = {
  facebook: MdFacebook,
  google: AiFillGoogleCircle,
}

export default function LoginForm({ dispatch, providers }: LoginFormProps) {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: { email: '' } })

  const router = useRouter()

  const onSubmit = (data: any) => {
    // signIn()
    dispatch(setUsername(data.username))
    router.push('/')
    console.log(data)
  }

  const oauthIcon = useCallback((id) => {
    return id !== 'email' ? React.createElement(nodeEl[id], null) : <></>
  }, [])

  return (
    <form
      className="shadow-xl hover:shadow-2xl flex flex-col py-8 px-14 bg-slate-50"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1
        className="text-3xl font-bold mb-6"
        style={{ marginBottom: styles.marginBottom }}
      >
        Connect yourself
      </h1>
      {/*  <Field control={control} name="username" sx={styles} />
    //    <Field control={control} name="password" sx={styles} />
    //   <div style={{ display: 'flex', justifyContent: 'end' }}>
    //     <Button
    //       type="submit"
    //       variant="contained"
    //       sx={{
    //         color: 'black',
    //         '&:hover': {
    //           color: 'white',
    //         },
    //       }}
    //     >
    //       Submit
    //     </Button>
       </div> */}
      <>
        {Object.values(providers).map((provider: any) => {
          console.log(provider)
          return (
            <div key={provider.name} className="mt-4">
              {provider.id === 'email' && (
                <div>
                  <hr className="my-4" />
                  <Field control={control} name="email" sx={styles} />
                </div>
              )}
              <Button
                variant="contained"
                onClick={() => signIn(provider.id)}
                className="bg-slate-200 text-black hover:text-white"
                startIcon={oauthIcon(provider.id)}
              >
                Sign in with {provider.name}
              </Button>
            </div>
          )
        })}
        <div className="mt-4 text-blue-400 hover:text-blue-500">
          <Link href="/signup">Sign up</Link>
        </div>
      </>
    </form>
  )
}
