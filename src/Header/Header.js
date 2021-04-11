import {
    Link,
    useHistory
 } from "react-router-dom";
import './Header.css'
import services from '../services/services'
import {useEffect, useState} from 'react'


function Header(props){
   const [isStateAuth, setAuth] = useState(0);
   let history = useHistory();
   function handleClick() {
     history.push("/");
    window.location.reload();
   }
    function onClickLogoutHandler(){
        services.userLogout()
        .then(()=>{
           sessionStorage.clear();
         })
        .then(()=>{
            setAuth(false)
            handleClick() 
        })
        .catch(console.log(Error))
    }
    
    useEffect(() => {
        if (props.token) {
            return setAuth(true)
        }
        console.log(`useEffect:${isStateAuth}`)

   },[props.token, isStateAuth])
   
     return (
    <div>
     {isStateAuth===true?
             <div>
                <ul className="menu">
                     <li><Link to="/">Home</Link> </li>
                     <li><Link to="/user" >Hello, {props.username}</Link> </li>
                     <li><Link to="/logout" onClick={onClickLogoutHandler}>Logout</Link></li>
             </ul> 
             </div>:
             <div>
                <ul className="menu">
                     <li><Link to="/">Home</Link> </li>
                     <li><Link to="/register">Register</Link> </li>
                     <li><Link to="/login" >Login</Link></li>
               </ul> 
             </div>
     
     }
     </div>
)
   

    
        }

export default Header;