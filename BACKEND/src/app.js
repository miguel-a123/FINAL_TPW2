import express from 'express'
import { globalMiddlewares } from './middlewares/globalMiddlewares.js'
import { dotenvConfig } from './config/dotenvConfig.js'
import { administradoresRouter } from './routes/admitradoresRouter.js'
import { clientesRouter } from './routes/clientesRouter.js'
import { authRouter } from './routes/authRouter.js'
import motosRouter from './routes/motosRouter.js'
import { sellersRouter } from './routes/sellersRouter.js'

const server = express()

// configs
dotenvConfig()

// middlewares
globalMiddlewares(server)

// routes
server.use('/', authRouter)
server.use('/sellers', sellersRouter)
server.use('/admins', administradoresRouter)
server.use('/users', clientesRouter)
server.use('/motorcycles', motosRouter)

// Rutas raíz
server.get('/', (req, res) => {
  return res.json('HOLA MUNDO...')
})

// Server on listen
const port = process.env.API_PORT || 3000
const domain = process.env.API_DOMAIN || 'localhost'
const protocol = process.env.API_PROTOCOL || 'http'

server.listen(port, () => {
  console.log(`Servidor ejecutandose en: ${protocol}://${domain}:${port}`)
})
