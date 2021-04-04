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

//import {useState} from "react"

function Menu(props){
//const [isAuth, setAuth] = useState(0);
// let auth = sessionStorage.getItem("authtoken");
// setAuth(auth)
let isAuth = props.auth.isAuth;
    return(
        <Router>
             <Header {...props}/>
             <Switch>
                <Route path="/user" component={MyDetails}/>
                <Route path="/logout" ><Redirect to='/'/></Route>
                <Route path="/register" component={Register}/>
                <Route path="/login" component={Login}/>
                <Route path="/"component={isAuth?Cards:Welcome}/>
            </Switch>
        </Router>
     )

 }


 export default Menu;