import { gql } from "@apollo/client";

export const GetEmployees = gql`
  query GetEmployees {
    employees {
      _id
      firstname
      lastname
      email
      avatar
      color
      from
      lat
      long
      starting
      job
      description
    }
  }
`;
