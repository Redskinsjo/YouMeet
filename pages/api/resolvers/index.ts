import nodemailer from 'nodemailer'

import Employee from '../models/employees'

const resolvers = {
  Query: {
    employees: async (parent: any, args: any) => {
      let regex
      let employees
      // const findEmployees = async (regex: any, sort: any, filter: any) => {
      //   let employees
      //   if (sort) {
      //     employees = await Employee.find(
      //       filter ? { fullname: regex } : {},
      //       null,
      //       {
      //         sort: { starting: sort === 1 ? 1 : -1 },
      //       }
      //     )
      //   } else {
      //     employees = await Employee.find(filter ? { fullname: regex } : {})
      //   }
      //   return employees
      // }
      console.log(args)
      // console.log(args.sort)
      if (args.filter) {
        regex = new RegExp(`^${args.filter}|${args.filter}`, 'gi')
      }
      employees = await Employee.find(
        args.filter ? { fullname: regex } : {}
      ).sort(args.sort === 1 ? 'starting' : args.sort === -1 ? '-starting' : {})

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
