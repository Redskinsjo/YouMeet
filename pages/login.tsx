import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useSession, getSession, getProviders } from 'next-auth/react'
// import { signIn, csrfToken, providers } from 'next-auth/client'

import LoginForm from '@/components/login-form'
import Header from '@/components/header'
import { RootState } from '@/redux/store'
import { withPublic } from '@/components/route-protection'
import { CLIENT_RENEG_WINDOW } from 'tls'

function Login({ providers }: any) {
  const dispatch = useDispatch()
  const username = useSelector((state: RootState) => state.user.username)
  const router = useRouter()
  const [authenticated, setAuthenticated] = useState(username ? true : false)
  const { data: session } = useSession()

  useEffect(() => {
    if (session) {
      router.replace('/')
    }
  }, [session])

  return !session ? (
    <div className="h-full">
      <Head>
        <title>Login</title>
      </Head>
      <Header classes="absolute w-full" />
      <div className="flex items-center justify-center absolute w-full h-full">
        <LoginForm dispatch={dispatch} providers={providers} />
      </div>
    </div>
  ) : null
}

export async function getServerSideProps() {
  return { props: { providers: await getProviders() } }
}

export default Login
// export default withPublic(Login);
