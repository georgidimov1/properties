import '../src/Test.css'
import Fetch from './services/Fetch'
import Demo from './Demo'
import {setState} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
function MenuHome (){
    
    const buttons = ['Home', 'About', 'Services', 'Gallery']
    const listItems = buttons.map((x, i)=>{
           return <li key={i}><button className="show" href="#">{x}</button></li>
    })
    function onClickFetching (){
       Fetch()
       .then(data => setState({data}));
    }
    return (
        <Router>
            <div className="menu-wrapper">
                <ul className="menu">
                    {listItems}
                        <li><button className="show" type="button" onClick={onClickFetching}>Fetch</button></li>
                        <li><Link to="/">Home</Link> </li>
                        <li><Link to="/demo">Demo</Link> </li>
                </ul> 
            </div>
            <Switch>
                <Route path="/demo" component={Demo}/>
                <Route path="/"/>
            </Switch>
    
        </Router>
    )
    }


export default MenuHome;