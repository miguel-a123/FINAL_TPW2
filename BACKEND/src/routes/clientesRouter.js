import { Router } from 'express'
import { clientesRegisterController } from '../controllers/clientesRegisterController.js'

const clientesRouter = Router()

// Registrar cliente
clientesRouter.post('/', clientesRegisterController)

export { clientesRouter }
