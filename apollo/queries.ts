import { gql } from '@apollo/client'

export const GetEmployees = gql`
  query GetEmployees($filter: String, $sort: Int) {
    employees(filter: $filter, sort: $sort) {
      _id
      fullname
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
      timestamp
    }
  }
`

export const GetSendEmailData = gql`
  query GetSendEmailData($id: ID) {
    oneEmployee(id: $id) {
      _id
      firstname
      lastname
      email
    }
  }
`

export const GetEmailProfileData = gql`
  query GetEmailProfileData($id: ID) {
    oneEmployee(id: $id) {
      firstname
      lastname
      avatar
      color
      from
      starting
      job
      description
    }
  }
`

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
`
