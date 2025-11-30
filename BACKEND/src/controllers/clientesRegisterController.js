import { usersAddNewUser } from '../services/users/usersAddNewUser.js'
import { usersGetCredentialsByEmail } from '../services/users/usersGetCredentialsByEmail.js'
import { hashPassword } from '../utils/hashPassword.js'
import { vendedorValidation } from '../models/joi/vendedorValidation.js'

async function clientesRegisterController(req, res) {
  try {
    const { firstname, lastname, gender, birthday, email, phone, password, repassword } = req.body


    await vendedorValidation.validateAsync({ firstname, lastname, gender, role: 'C', birthday, email, phone, password, repassword })


    const checkResult = await usersGetCredentialsByEmail(email)
    const clientes = checkResult[0]
    if (clientes.length > 0) {
      return res.status(400).json({ error: 'El correo ya se encuentra registrado.' })
    }

    const hashedPassword = await hashPassword(password)


    await usersAddNewUser(firstname, lastname, gender, 'C', birthday, email, phone, hashedPassword)

    return res.json({ message: `Cliente ${email} registrado con éxito.` })

  } catch (error) {
    if (error.details) {
      return res.status(400).json({ error: error.details[0].message })
    } else {
      return res.status(400).json({ error: error.message })
    }
  }
}

export { clientesRegisterController }
