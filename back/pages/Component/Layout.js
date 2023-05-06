import Navbar from "./Navbar";
import Footer from "./Footer";
import HomeNavbar from "./homeNavbar";
import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { useEffect } from "react"
import Cookies from "js-cookie"

export default function Layout({ children }){
    const name = children.type.name;
    if(name === 'Home'){
        return(
            <>
                <HomeNavbar/>
                {children}
                <Footer/>
            </>
        )
    } else if(name === 'Resgister'){
        return(
            <>
                 <Navbar/>
                {children}
                <Footer/>
            </>
        )
    }
    else{
        const coockie = Cookies.get('NextCoockie')
        const { user,auth } = useContext(AuthContext);
        useEffect(()=>{
            if(coockie) auth(coockie)
        },[])
        if(user){
            return(
                <>
                    <Navbar/>
                    {children}
                    <Footer/>
                </>
            )
        }else{
            return(
                <h1>Privado</h1>
            )
        }
    }
}