import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider as ReduxProvider } from 'react-redux'
import { SessionProvider } from 'next-auth/react'
import { StyledEngineProvider } from '@mui/material'
import { Auth0Provider } from '@auth0/auth0-react'

import GraphQLProvider from '@/graphql/client'
import { store } from '@/redux/store'
import ErrorBoundary from '@/components/error-boundaries'
import '@/styles/globals.css'
import '@/public/locales'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <Auth0Provider
      domain="dev-bup1scfe.us.auth0.com"
      clientId="0vPrQ08isdUrZ691Y93OMDOzayKbsjqQ"
      redirectUri={
        process.env.NODE_ENV === 'development'
          ? 'http://localhost:3000'
          : process.env.API_PROD_URI
      }
    >
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
    </Auth0Provider>
  )
}

export default MyApp
