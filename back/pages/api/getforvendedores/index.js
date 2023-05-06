import { PrismaClient } from '@prisma/client';
import Database from '../database/index';

const prisma = new PrismaClient();
const database = new Database()
export default async function Users (req,res){
    try {
        const { ano,mes,day,daylimit } = req.body
        const venda = await database.vendasDayFilter(ano,mes,day,daylimit)
        return res.status(200).json({venda:venda})
    }catch(error){
        return console.log(error)
    }
};