import gql from 'graphql-tag'

const typeDefs = gql`
  """
  Custom scalar for date
  """
  scalar Date

  """
  Response from an email sent to an employee
  """
  type SendEmailResponse {
    """
    Greets the client for a valid sent email
    """
    hello: String
  }

  """
  Description for the type:
  An employee is the main user in the app
  """
  type Employee @cacheControl(maxAge: 86400) {
    """
    Image photo of the employee
    """
    avatar: String!
    """
    color unique for the employee
    """
    color: String!
    """
    description of the employee
    """
    description: String!
    """
    email address of the employee
    """
    email: String!
    """
    firstname of the employee
    """
    firstname: String!
    """
    origin location of the employee
    """
    from: String!
    """
    fullname of the employee
    """
    fullname: String!
    """
    Identification of the employee
    """
    id: ID!
    """
    job of the employee
    """
    job: String!
    """
    lastname of the employee
    """
    lastname: String!
    """
    latitude location of the employee
    """
    lat: String!
    """
    longitude location of the employee
    """
    long: String!
    """
    starting is the starting date of the employee within the company
    """
    starting: Date
  }

  """
  all queries of the app
  """
  type Query {
    """
    fetch many employees following the search filter and the sorting
    """
    employees(filter: String, sort: Int): [Employee!]!
    """
    fetch one employee following its identification (id)
    """
    oneEmployee(id: ID): Employee!
  }

  """
  all mutations of the app
  """
  type Mutation {
    """
    send an email to an employee
    """
    sendEmail(
      to: String
      subject: String
      text: String
      from: String
    ): SendEmailResponse
  }

  """
  enum for the scope of @cacheControl directive
  """
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
