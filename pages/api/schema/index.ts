import { gql } from "apollo-server-micro";

const typeDefs = gql`
  type Employee {
    _id: ID
    firstname: String
    lastname: String
    email: String
    avatar: String
    color: String
    from: String
    lat: Float
    long: Float
    starting: String
    job: String
    description: String
  }

  type SendEmailResponse {
    hello: String
  }

  type Query {
    employees: [Employee]
    oneEmployee(id: ID): Employee
  }
  type Mutation {
    sendEmail(
      to: String
      subject: String
      text: String
      from: String
    ): SendEmailResponse
  }
`;

export default typeDefs;
