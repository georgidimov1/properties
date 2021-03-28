import {
    Link
 } from "react-router-dom";
 import './Links.css'

function MenuLinks(){
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

export default MenuLinks;