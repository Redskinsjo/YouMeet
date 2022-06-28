import { gql } from 'apollo-server-micro'

const typeDefs = gql`
  type Employee @cacheControl(maxAge: 86400) {
    _id: ID
    fullname: String
    firstname: String
    lastname: String
    email: String!
    avatar: String!
    color: String
    from: String
    lat: Float
    long: Float
    starting: String
    job: String
    description: String
    timestamp: String
  }

  type SendEmailResponse {
    hello: String
  }

  type Query {
    employees(filter: String, sort: Int): [Employee!]
    oneEmployee(id: ID): Employee!
  }
  type Mutation {
    sendEmail(
      to: String
      subject: String
      text: String
      from: String
    ): SendEmailResponse
  }

  enum CacheControlScope {
    PUBLIC
    PRIVATE
  }

  directive @cacheControl(
    maxAge: Int
    scope: CacheControlScope
    inheritMaxAge: Boolean
  ) on FIELD_DEFINITION | OBJECT | INTERFACE | UNION
`

export default typeDefs
