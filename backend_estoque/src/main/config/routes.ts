import { readdirSync } from 'fs'

import express, { Express, Router } from 'express'
import cors from 'cors'

export const setupRoutes = (app: Express): void => {
  const router = Router()
  app.use(cors())
  app.use(express.json())
  app.use('/api', router)
  readdirSync(`${__dirname.replace('config', 'routes')}`).map(async fileName => {
    (await import(`../routes/${fileName}`)).default(router)
  })
}
