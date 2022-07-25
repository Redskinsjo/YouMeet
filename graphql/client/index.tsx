import React from 'react'
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
  createHttpLink
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
  uri:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/api/graphql'
      : process.env.API_PROD_URI + '/api/graphql'
})

const authLink = setContext((_, { headers }) => {
  const token = '12'
  return {
    headers: {
      ...headers,
      authorization: token ? 'Bearer ' + token : ''
    }
  }
})

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  headers: { 'Content-Type': 'application/json' },
  credentials: 'omit'
})

export default function GraphQLProvider({ children }: any) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
