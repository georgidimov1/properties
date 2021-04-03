import {
    BrowserRouter as Router,
    Switch,
    Route
 } from "react-router-dom";
 import Register from '../Register/Register.js'
 import Welcome from '../Welcome/Welcome'
 import Login from "../Login/Login"
 import Header from './Header.js'
 import {post} from '../services/kinvey.js'
 import MyDetails from "../Create/MyDetails.js"
 function Menu(){
    return(
        <Router>
             <Header/>
             <Switch>
                <Route path="/user" component={MyDetails}/>
                <Route path="/logout" render={()=>{
                   post("user", "_logout", "", "Kinvey")
                   .then()
                }}/>
                <Route path="/register" component={Register}/>
                <Route path="/login" component={Login}/>
                <Route path="/"component={Welcome}/>
            </Switch>
        </Router>
     )

 }

 export default Menu;