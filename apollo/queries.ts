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

export const GetOneEmployee = gql`
  query GetOneEmployee($id: ID) {
    oneEmployee(id: $id) {
      _id
      firstname
      lastname
      email
    }
  }
`;

export const SendEmail = gql`
  mutation SendEmail(
    $to: String
    $subject: String
    $text: String
    $from: String
  ) {
    sendEmail(to: $to, subject: $subject, text: $text, from: $from) {
      hello
    }
  }
`;
