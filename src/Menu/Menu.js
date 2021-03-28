import {
    BrowserRouter as Router,
    Switch,
    Route
 } from "react-router-dom";
 import CreatePerson from '../Create/CreatePerson'
 import MenuLinks from './Links'
 import Welcome from '../Welcome/Welcome'
 import Login from "../Login/Login"
 function Menu(){
     return(
        <Router>
           <MenuLinks/>
            <Switch>
                <Route path="/register" component={CreatePerson}/>
                <Route path="/login" component={Login}/>
                <Route path="/"component={Welcome}/>
            </Switch>
        </Router>
     )

 }

 export default Menu;