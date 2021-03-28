import {
    BrowserRouter as Router,
    Switch,
    Route
 } from "react-router-dom";
 //import Demo from '../Demo'
 import CreatePerson from '../CreatePerson'
 import MenuLinks from './Links'
 import Welcome from '../Welcome/Welcome'
 function Menu(){
     return(
        <Router>
       
       
    <MenuLinks/>
    
     <Switch>
         <Route path="/register" component={CreatePerson}/>
         <Route path="/CreatePerson" component={CreatePerson}/>
         <Route path="/"component={Welcome}/>
     </Switch>
    </Router>
     )

 }

 export default Menu;