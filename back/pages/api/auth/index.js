import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import Database from '../database/index';

const prisma = new PrismaClient();
const database = new Database()
export default async function Users (req,res){
    try {
        const {email,password} = req.body
        const user = await database.getUser({email:email})
        console.log(user)
        const comparar = bcrypt.compare(password,user.password)
        if(!comparar){
            return res.status(422).json({msg:'Senha invalida'})
        }
        const secret = process.env.SECRET
        const token = jwt.sign(
            {
                id:user.id,
            },
            secret,
            {expiresIn: "1d"}
            )
            console.log(token)
        res.status(200).json({msg:'Autenticação realizada com sucesso',user:user.username,token:token})
    }catch(error){
        console.log(error)
    }
};