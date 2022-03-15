// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ApolloServer } from 'apollo-server-micro'
import mongoose from 'mongoose'

import typeDefs from '../schema'
import resolvers from '../resolvers'

type Data = {
  _id: string
  firstname: string
  lastname: string
  email: string
  avatar: string
  color: string
  from: string
  lat: string
  long: string
  starting: Date
  job: string
  description: string
}

const apolloServer = new ApolloServer({ typeDefs, resolvers })
const startServer = apolloServer.start()

export const config = { api: { bodyParser: false } }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  if (req.method === 'OPTIONS') {
    res.end()
    return false
  }
  await mongoose.connect(process.env.MONGODB_URI)

  await startServer
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res)
}
