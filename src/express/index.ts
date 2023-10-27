import compression from 'compression'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'

import express, { Application } from 'express'
import helmet from 'helmet'
import morgan from 'morgan'

import api from '../api/index.ts'

const createServer = (): Application => {
  const app = express()

  app.use(bodyParser.json())
  app.use(compression())
  app.use(express.urlencoded({ extended: true }))
  app.use(express.json())

  app.use(helmet())
  app.use(cookieParser())
  app.use(morgan('dev'))

  app.use('/api', api())

  return app
}

export { createServer }
