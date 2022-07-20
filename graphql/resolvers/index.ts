import nodemailer from 'nodemailer'
import { Kind, GraphQLScalarType } from 'graphql'

import EmployeeMongoDB from '@/pages/api/models/employees'
import { Resolvers } from '@/generated'
import prisma from '@/lib/prisma'
import { Employee } from '@/generated'

const resolvers: Resolvers = {
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    parseValue(value: any) {
      return new Date(value)
    },
    serialize(value: any) {
      return value.getTime()
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return new Date(+ast.value)
      }
      return null
    },
  }),
  Query: {
    employees: async (parent, args, _, info) => {
      let regex
      let employees: Employee[] = []

      if (args.filter) {
        regex = new RegExp(`^${args.filter}|${args.filter}`, 'gi')
      }
      // employees = await Employee.find(
      //   args.filter ? { fullname: regex } : {}
      // ).sort(args.sort === 1 ? 'starting' : args.sort === -1 ? '-starting' : {})

      if (args.filter || args.sort === 1 || args.sort === -1) {
        if (args.filter) {
          regex = new RegExp(`^${args.filter}|${args.filter}`, 'gi')
          employees = await prisma.employees.findMany({
            where: {
              fullname: {
                contains: args.filter,
              },
            },
          })
        }

        if (args.sort === 1) {
          employees =
            employees.length > 0
              ? employees.sort(
                  (a, b) => Number(a.starting) - Number(b.starting)
                )
              : (await prisma.employees.findMany()).sort(
                  (a, b) => Number(a.starting) - Number(b.starting)
                )
        } else if (args.sort === -1) {
          employees =
            employees.length > 0
              ? employees.sort(
                  (a, b) => Number(b.starting) - Number(a.starting)
                )
              : (await prisma.employees.findMany()).sort(
                  (a, b) => Number(b.starting) - Number(a.starting)
                )
        }
      } else {
        employees = await prisma.employees.findMany()
      }

      return employees
    },
    oneEmployee: async (parent, args) => {
      const employee = await EmployeeMongoDB.findById(args.id)
      // let employee
      // if (args.id) {
      //   employee = await prisma.employees.findUnique({
      //     where: {
      //       id: args.id,
      //     },
      //   })
      // }
      return employee
    },
  },
  Mutation: {
    sendEmail: (parent: any, args: any) => {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_ADDRESS,
          pass: process.env.GMAIL_PASSWORD,
        },
      })
      const mailOptions = {
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
