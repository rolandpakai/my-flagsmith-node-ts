#!/usr/bin/env node

import 'dotenv/config'
import http from 'http'
import { listenOptions } from './env.ts'
import { createServer } from './express/index.ts'
import { AddressInfo } from 'net'

const startServer = async () => {
  const app = createServer()
  const server = http.createServer(app)

  server.listen(listenOptions, () => {
    const addressInfo = server.address() as AddressInfo
    // eslint-disable-next-line no-console
    console.log(`Server Running at http://${addressInfo.address}:${addressInfo.port}`)
  })
}

startServer()
