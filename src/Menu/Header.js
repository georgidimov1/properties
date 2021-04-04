import {
    Link
 } from "react-router-dom";
 import './Header.css'

function Header(props){
        if(props.authData.isAuth){

            return (
                <div>
                   <ul className="menu">
                        <li><Link to="/">Home</Link> </li>
                        <li><Link to="/user">Hello, {props.authData.username}</Link> </li>
                        <li><Link to="/logout">Logout</Link></li>
                </ul> 
                </div>
            )
        } else{
            return (
                <div>
                   <ul className="menu">
                        <li><Link to="/">Home</Link> </li>
                        <li><Link to="/register">Register</Link> </li>
                        <li><Link to="/login">Login</Link></li>
                  </ul> 
                </div>
            )
        }

    
        }

export default Header;