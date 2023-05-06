import Database from "../database/index";

const database = new Database()
export default async function Register(req,res){
    const POST = async(data)=>{
        await database.Create({data:data})
    }
    
    try{
        POST(req.body)
        return res.status(200).json({sucess:true})
    }catch(error){
        console.log(error)
        return res.status(400).json({sucess:false})
    }
}