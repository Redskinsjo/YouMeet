import nodemailer from 'nodemailer'

import Employee from '../models/employees'

const resolvers = {
  Query: {
    employees: async (
      parent: any,
      args: { filter: string; sort: number },
      _: any,
      info: any
    ) => {
      let regex
      let employees

      if (args.filter) {
        regex = new RegExp(`^${args.filter}|${args.filter}`, 'gi')
      }
      employees = await Employee.find(
        args.filter ? { fullname: regex } : {}
      ).sort(args.sort === 1 ? 'starting' : args.sort === -1 ? '-starting' : {})

      employees = employees.map((emp) => ({
        ...emp._doc,
        timestamp: new Date(),
      }))
      return employees
    },
    oneEmployee: async (parent: any, args: any) => {
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
