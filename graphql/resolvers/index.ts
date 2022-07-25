/* eslint-disable */
/* graphql-eslint */

import { Kind, GraphQLScalarType } from 'graphql'

import EmployeeMongoDB from '@/pages/api/models/employees'
import { Resolvers } from '@/generated'
import prisma from '@/lib/prisma'
import { Employee, InterestedIndividual } from '@/generated'
import { sendEmailCustom } from '@/utils/sendEmailCustom'

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
      return sendEmailCustom(args)
    },
    createInterested: async (parent, args, context, info) => {
      let individual

      if (args.email) {
        individual = await prisma.interestedindividual.findFirst({
          where: {
            email: args.email.toLowerCase(),
          },
        })
      }
      if (individual) return null

      let createdIndividual: InterestedIndividual | null | undefined = null
      if (args.email) {
        createdIndividual = await prisma.interestedindividual.create({
          data: {
            email: args.email,
          },
        })
        if (createdIndividual) {
          sendEmailCustom(args)
        }
      }

      return createdIndividual
    },
  },
}

export default resolvers
