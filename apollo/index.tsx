import React from "react";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";

const httpLink = new HttpLink({
  uri: "http://localhost:3000/api/graphql",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  headers: { "Content-Type": "application/json" },
  credentials: "omit",
});

export default function GraphQLProvider({ children }: any) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
