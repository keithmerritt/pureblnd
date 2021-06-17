import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@pureblnd.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'John',
        email: 'test.1@pureblnd.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Jane',
        email: 'test.2@pureblnd.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users