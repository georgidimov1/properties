import {
    Link
 } from "react-router-dom";
 import './Header.css'
import services from '../services/services'
import {useState} from 'react'

function Header(props){
    const [isStateAuth, setAuth] = useState(props.auth.isAuth);
    function onClickLogoutHandler(){
        setAuth(false)
        services.userLogout()
        .then(()=>{
           sessionStorage.clear();        
        })
        .catch(console.log(Error))
     
    }
        if(isStateAuth){

            return (
                <div>
                   <ul className="menu">
                        <li><Link to="/">Home</Link> </li>
                        <li><Link to="/user" >Hello, {props.auth.username}</Link> </li>
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