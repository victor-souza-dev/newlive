import Cookies from "js-cookie";

export default function setCookie(value){
   try{
      console.log(value)
    Cookies.set('NextCoockie',value,{expires:7})
    console.log('sucess')
   }catch(error){
    console.log(error)
   }
}

