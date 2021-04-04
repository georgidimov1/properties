import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
 } from "react-router-dom";
 import Register from '../Register/Register.js'
 import Welcome from '../Welcome/Welcome'
 import Login from "../Login/Login"
 import Header from './Header.js'

 import MyDetails from "../Create/MyDetails.js"
 import Cards from "../Card/Cards.js"
import services from "../services/services.js";
//import {useState} from "react"

function Menu(){
// const [isAuth, setAuth] = useState(0);
// let auth = sessionStorage.getItem("authtoken");
// setAuth(auth)
let auth = {'isAuth': sessionStorage.getItem("authtoken"), 'username' : sessionStorage.getItem("username")}

    return(
        <Router>
             <Header authData={auth}/>
             <Switch>
                <Route path="/user" component={MyDetails}/>
                <Route path="/logout" render={()=>{
                   services.userLogout()
                   .then(()=>{
                      sessionStorage.clear();
                      
                   })
                   .catch(console.log(Error))

                   return <Redirect to='/'/>
                }}/>
                <Route path="/register" component={Register}/>
                <Route path="/login" component={Login}/>
                <Route path="/"component={auth.isAuth?Cards:Welcome}/>
            </Switch>
        </Router>
     )

 }

 export default Menu;