import '../styles/globals.css'
import { AppProps } from 'next/app'
import { Provider as ReduxProvider } from 'react-redux'
import { StyledEngineProvider } from '@mui/material'
import { Auth0Provider } from '@auth0/auth0-react'

import GraphQLProvider from '@/graphql/client'
import { store } from '@/redux/store'
import ErrorBoundary from '@/components/error-boundaries'
import '@/styles/globals.css'
import '@/public/locales'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Auth0Provider
      domain='dev-bup1scfe.us.auth0.com'
      clientId='0vPrQ08isdUrZ691Y93OMDOzayKbsjqQ'
      redirectUri={
        process.env.NODE_ENV === 'development'
          ? 'http://localhost:3000'
          : process.env.API_PROD_URI
      }
    >
      <ReduxProvider store={store}>
        <ErrorBoundary>
          <GraphQLProvider>
            <StyledEngineProvider injectFirst>
              <Component {...pageProps} />
            </StyledEngineProvider>
          </GraphQLProvider>
        </ErrorBoundary>
      </ReduxProvider>
    </Auth0Provider>
  )
}

export default MyApp
