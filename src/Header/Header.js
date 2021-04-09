import {
    Link
 } from "react-router-dom";
import './Header.css'
import services from '../services/services'
import {useContext, useEffect, useState} from 'react'
import {LoginContext} from '../contexts/LoginContext'

function Header(props){
    console.log(props)
    const authData = useContext(LoginContext)
    const [isStateAuth, setAuth] = useState(null);
      
    function onClickLogoutHandler(){
        services.userLogout()
        .then(()=>{
           sessionStorage.clear();
         })
        .then(()=>{
            setAuth(false) 
        })
        .catch(console.log(Error))
    }
    
    useEffect(() => {
        if (authData.token) {
            return setAuth(true)
        }

   },[authData.token])

    
        if(isStateAuth){

            return (
                <div>
                   <ul className="menu">
                        <li><Link to="/">Home</Link> </li>
                        <li><Link to="/user" >Hello, {authData.username}</Link> </li>
                        <li><Link to="/logout" onClick={onClickLogoutHandler}>Logout</Link></li>
                </ul> 
                </div>
            )
        } else{
            return (
                <div>
                   <ul className="menu">
                        <li><Link to="/">Home</Link> </li>
                        <li><Link to="/register">Register</Link> </li>
                        <li><Link to="/login" >Login</Link></li>
                  </ul> 
                </div>
            )
        }

    
        }

export default Header;