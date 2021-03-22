import '../src/Test.css'
import fetch from './services/fetch'
import Demo from './Demo'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
function Menu (){
    
    const buttons = ['Home', 'About', 'Services', 'Gallery']
    const listItems = buttons.map((x, i)=>{
           return <li key={i}><button className="show" href="#">{x}</button></li>
    })
    function onClickFetching (){
               return fetch;
    }
    return (

        <Router>
        <div className="menu-wrapper">
            <ul className="menu">
                 {listItems}
                    <li><button className="show" type="button" onClick={onClickFetching}>Contact</button></li>
                    <li><button to="/demo">Demo</button></li>
             </ul> 
        </div>
         
         <Route path="/demo">
            <Demo />
        </Route>
   
    
      </Router>
    )
    }


export default Menu;