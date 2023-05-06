import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import Database from '../database/index';

const prisma = new PrismaClient();
const database = new Database()
export default async function Users (req,res){
    try {
        const {id} = req.body
        const user = await database.getUserwithId({id:id})
        res.status(200).json({user:user})
    }catch(error){
        console.log(error)
    }
};
