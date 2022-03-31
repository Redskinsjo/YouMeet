import React, { useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useSession, getProviders } from 'next-auth/react'
import { Providers } from 'next-auth'

import LoginForm from '@/components/login-form'
import Header from '@/components/header'

function Login({ providers }: { providers: Providers }) {
  const router = useRouter()
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
        <LoginForm providers={providers} />
      </div>
    </div>
  ) : null
}

export async function getServerSideProps() {
  return { props: { providers: await getProviders() } }
}

export default Login
