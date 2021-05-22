import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'admin user',
    email: 'admin@mail.com',
    password: bcrypt.hashSync('12345', 10),
    isAdmin: true,
  },
  {
    name: 'user1',
    email: 'user1@mail.com',
    password: bcrypt.hashSync('12345', 10)
  },
  {
    name: 'user2',
    email: 'user2@mail.com',
    password: bcrypt.hashSync('12345', 10)
  }
]

export default users