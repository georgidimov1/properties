import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React  from 'react'
import Footer from './Footer/Footer'
import {LoginContext} from './contexts/LoginContext'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './Header/Header.css'
import Register from './Register/Register.js'
import Login from "./Login/Login"
import MyDetails from "./Create/MyDetails.js"
import CardGrid from "./Card/CardGrid"
import Header from './Header/Header'
import Details from './Details/Details'
import ErrorBoundary from './ErrorHandler/ErrorBoundary'
function App() {
  let authData = {'token': sessionStorage.getItem("authtoken"), 'username' : sessionStorage.getItem("username")};
 
  return (
      <LoginContext.Provider value={authData}>
        <div className="App bg-gra-01 background-img"
        style={{ 
          backgroundImage: 'url(/home-background.jpg)'
        }}
        >
         <Router>
             <Header {...authData}/>
             <ErrorBoundary>
               <Switch>
                <Route path="/user/details/:id" render={props => <Details {...props} {...authData} />}/>
                <Route path="/user" render={()=><MyDetails/>}/>
                <Route path="/logout" />
                <Route path="/register" render={()=><Register/>}/>
                <Route path="/login" render={()=><Login/>}/>
                <Route path="/" render={()=><CardGrid {...authData}/>}/>
             </Switch>
            </ErrorBoundary>
        </Router>
          <Footer/>
        </div>
      </LoginContext.Provider>
  );
}

export default App;
