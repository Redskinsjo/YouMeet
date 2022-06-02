import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider as ReduxProvider } from 'react-redux'
import { SessionProvider } from 'next-auth/react'
import { StyledEngineProvider } from '@mui/material'

import GraphQLProvider from '../apollo'
import { store } from '@/redux/store'
import ErrorBoundary from '@/components/error-boundaries'
import '../styles/globals.css'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <ErrorBoundary>
        <GraphQLProvider>
          <SessionProvider session={session}>
            <StyledEngineProvider injectFirst>
              <Component {...pageProps} />
            </StyledEngineProvider>
          </SessionProvider>
        </GraphQLProvider>
      </ErrorBoundary>
    </ReduxProvider>
  )
}

export default MyApp
