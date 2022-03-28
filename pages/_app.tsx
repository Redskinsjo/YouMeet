import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider as ReduxProvider } from 'react-redux'
import { SessionProvider } from 'next-auth/react'

import GraphQLProvider from '../apollo'
import { store } from '@/redux/store'
import RouteGuard from '@/components/route-guard'
import { RootState } from '@/redux/store'
import ErrorBoundary from '@/components/error-boundaries'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <ErrorBoundary>
        <GraphQLProvider>
          <SessionProvider session={session}>
            <Component {...pageProps} />
          </SessionProvider>
        </GraphQLProvider>
      </ErrorBoundary>
    </ReduxProvider>
  )
}

export default MyApp
