import { createConnection } from '../../config/dbConfig.js'

async function usersAddNewUser(firstname, lastname, gender, role, birthday, email, phone, hashedPassword) {
  try {
    const connection = await createConnection()


    const [existing] = await connection.query(
      'SELECT * FROM users WHERE email = ? OR phone = ?',
      [email, phone]
    )

    if (existing.length > 0) {
      const emailExists = existing.some(user => user.email === email)
      
      const phoneExists = existing.some(user => user.phone === phone)

      if (emailExists && phoneExists) {
        throw new Error('El correo y el teléfono ya están en uso')
      } else if (emailExists) {
        throw new Error('El correo ya está en uso')
      } else if (phoneExists) {
        throw new Error('El teléfono ya está en uso')
      }
    }

    
    const insertQuery = `
      INSERT INTO users
        (firstname, lastname, gender, role, birthday, email, phone, password, createdAt, updatedAt)
      VALUES 
        (?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW());
    `
    const registred = await connection.query(insertQuery, [
      firstname,
      lastname,
      gender,
      role,
      birthday,
      email,
      phone,
      hashedPassword
    ])

    return registred
  } catch (error) {
    console.log(error)
    throw new Error(error.message || 'Error al crear usuario')
  }
}

export { usersAddNewUser }
