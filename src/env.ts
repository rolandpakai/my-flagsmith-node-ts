import { ListenOptions } from 'net'

const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 5000

export const listenOptions: ListenOptions = {
  host,
  port,
}
