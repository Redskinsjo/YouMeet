// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import mongoose from 'mongoose'
import { createServer } from '@graphql-yoga/node'

import typeDefs from '@/graphql/schema/schema'
import resolvers from '@/graphql/resolvers'

export const config = { api: { bodyParser: false } }

mongoose.connect(`${process.env.MONGODB_URI}`)

export default createServer<{ req: NextApiRequest; res: NextApiResponse }>({
  schema: {
    typeDefs,
    resolvers
  },
  graphiql: true
})
