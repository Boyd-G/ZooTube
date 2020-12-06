import { Query } from '../index'

const findOneByEmail = async (email: string) => Query(`SELECT * FROM users WHERE email ='${email}' LIMIT 1`);

const findOnebyId = async (id: number) => Query(`SELECT * FROM users WHERE id ='${id}' LIMIT 1`)

const insert = async (user: any) => Query('INSERT INTO users (email, firstname, lastname, password) VALUES ?', user);

export default {
    findOneByEmail,
    findOnebyId,
    insert
}