import nodemailer from 'nodemailer'
// import mongoose from 'mongoose'
import Employee from '../models/employees'
// const Employee = mongoose.model('Employee')

const resolvers = {
  Query: {
    employees: async () => {
      console.log('lifne fetch')
      const employees = await Employee.find()
      console.log('line 10', employees)
      return employees
    },
    oneEmployee: async (parent: any, args: any) => {
      console.log(args)
      const employee = await Employee.findById(args.id)
      return employee
    },
  },
  Mutation: {
    sendEmail: (parent: any, args: any) => {
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_ADDRESS,
          pass: process.env.GMAIL_PASSWORD,
        },
      })
      var mailOptions = {
        from: args.from,
        to: args.to,
        subject: args.subject,
        text: args.text,
      }
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error)
        } else {
          console.log('Email sent: ' + info.response)
        }
      })
      return {
        hello: 'me',
      }
    },
  },
}

export default resolvers
