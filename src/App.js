import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React  from 'react'
import Footer from './Footer/Footer'
import {LoginContext} from './contexts/LoginContext'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './Header/Header.css'
import Register from './Register/Register.js'
import Login from "./Login/Login"
import MyDetails from "./Create/MyDetails.js"
import CardGrid from "./Card/CardGrid"
import Header from './Header/Header'
import Details from './Details/Details'
function App() {
  let authData = {'token': sessionStorage.getItem("authtoken"), 'username' : sessionStorage.getItem("username")};
 
  return (
      <LoginContext.Provider value={authData}>
        <div className="App bg-gra-01">
         <Router>
             <Header {...authData}/>
            <Switch>
                <Route path="/user/details/:id" render={props => <Details {...props} {...authData} />}/>
                <Route path="/user" render={()=><MyDetails/>}/>
                <Route path="/logout" ><Redirect to='/'/></Route>
                <Route path="/register" render={()=><Register/>}/>
                <Route path="/login" render={()=><Login/>}/>
                <Route path="/" render={()=><CardGrid {...authData}/>}/>
            </Switch>
        </Router>
          <Footer/>
        </div>
      </LoginContext.Provider>
  );
}

export default App;
