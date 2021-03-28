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
                <li><Link to="/CreatePerson">Login</Link></li>
                {/* <li><Link to="/all" className="show" type="button" onClick={onClickFetching}>Fetch</Link></li> */}
                <li><Link to="/" className="logo">Logo</Link></li>
       </ul> 
       </div>
    )
}

export default MenuLinks;