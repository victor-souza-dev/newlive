const { Vendasoperations } = require("../models/vendasModel");
const database = new Vendasoperations()

class vendasController{
  async get(req,res){
    try{
      const dados = await database.filterTotal(req.body);
      res.status(200).json({data: dados})
    }catch(error){
    console.log(error)
  }}
  // async ready(req,res){
  //   try {
  //     const dados = await database.get();
  //     res.status(200).json({data: dados})
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // async update(req,res){
  //   try{
  //     const dados = await database.patch(req.body);
  //     res.status(200).json({data: dados})
  //   }catch(error){
  //   console.log(error)
  // }}
  // async delet(req,res){
  //   try{
  //     const dados = await database.delet(req.params.id);
  //     res.status(200).json({data: dados})
  //   }catch(error){
  //   console.log(error)
  // }
  // }
}
module.exports = { 
  vendasController
 };