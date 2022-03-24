/* eslint-disable react/display-name */
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '@/redux/store'

// routeProtection.js
// withPublic checks if the user is logged in, if they are... it will reroute to '/account'.
// (ex:) a logged in user tries to access /login; they will be rerouted to /account.
export const withPublic = (WrappedComponent: any) => {
  return (props: any) => {
    const router = useRouter()
    const username = useSelector((state: RootState) => state.user.username)
    const authenticated = useAuth(username)

    useEffect(() => {
      if (authenticated) {
        router.replace('/')
      } else {
        router.replace('/login') // full-screen loader here
      }
    }, [authenticated])

    if (!authenticated) {
      return <div>Loading...</div>
    }

    return <WrappedComponent {...props} />
  }
}

// withProtected checks if the user is not logged in, if not it will reroute to '/login'.
// (ex:) a logged out user tries to access /account, they will be rerouted to /login.
export const withProtected = (WrappedComponent: any) => {
  return (props: any) => {
    const router = useRouter()
    const username = useSelector((state: RootState) => state.user.username)
    const authenticated = useAuth(username)

    useEffect(() => {
      if (!authenticated) {
        router.replace('/login')
      }
    }, [authenticated])

    if (!authenticated) {
      return <h1>Loading here!</h1> // full-screen loader here
    }

    return <WrappedComponent {...props} />
  }
}

const useAuth = (username: any) => {
  const router = useRouter()
  const [authenticated, setAuthenticated] = useState(false)
  //   const username = useSelector((state: RootState) => state.user.username);

  useEffect(() => {
    if (!username) {
      setAuthenticated(false)
      router.push('/login')
      console.log('me')
    } else {
      setAuthenticated(true)
    }
  }, [])
  return authenticated
}
