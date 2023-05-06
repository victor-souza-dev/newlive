import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import Database from '../database/index';

const prisma = new PrismaClient();
const database = new Database()
export default async function Users (req,res){
    try {
        const {id,data} = req.body
        const venda = await database.postVenda({id:id,data:data})
        res.status(200).json({venda:venda})
    }catch(error){
        console.log(error)
    }
};