import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '@mui/material'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { MdFacebook } from 'react-icons/md'
import { AiFillGoogleCircle } from 'react-icons/ai'
import { Providers } from 'next-auth'
import { useAuth0 } from '@auth0/auth0-react'

import Field from './field'

interface LoginFormProps {
  providers: Providers
}

const styles = {
  padding: '8px 0px',
  marginBottom: '12px',
  width: '100%',
}

const nodeEl: { [key: string]: React.FC } = {
  facebook: MdFacebook,
  google: AiFillGoogleCircle,
}

export default function LoginForm({ providers }: LoginFormProps) {
  const { control, handleSubmit } = useForm({ defaultValues: { email: '' } })
  // const { loginWithRedirect } = useAuth0()

  // console.log(providers)
  console.log(process.env.NODE_ENV)
  providers = { google: providers.google, email: providers.email }
  console.log(providers)

  const oauthIcon = useCallback((id) => {
    return id !== 'email' ? React.createElement(nodeEl[id], null) : <></>
  }, [])

  return (
    <div className="shadow-xl hover:shadow-2xl flex flex-col py-8 px-14 bg-slate-50">
      <h1
        className="text-3xl font-bold mb-6"
        style={{ marginBottom: styles.marginBottom }}
      >
        Connect yourself
      </h1>
      <>
        {Object.values(providers).map((provider: any) => {
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
                // onClick={() => loginWithRedirect()}
                // onClick={handleSubmit((data) => {
                //   if (provider.id === 'email') {
                //     signIn(provider.id, {
                //       email: data.email,
                //       callbackUrl: 'http://localhost:3000',
                // process.env.NODE_ENV === 'development'
                //   ? 'http://localhost:3000'
                //   : process.env.API_PROD_URI,
                //   })
                // } else {
                //   signIn(provider.id, {
                //     callbackUrl: 'http://localhost:3000',
                // process.env.NODE_ENV === 'development'
                //   ? 'http://localhost:3000'
                //   : process.env.API_PROD_URI,
                //     })
                //   }
                // })}
                className="bg-slate-200 text-black hover:text-white"
                startIcon={oauthIcon(provider.id)}
                data-test="signin"
              >
                Sign in with {provider.name}
              </Button>
            </div>
          )
        })}
        {/* <div className="mt-4 text-blue-400 hover:text-blue-500">
          <Link href="/signup">Sign up</Link>
        </div> */}
      </>
    </div>
  )
}
