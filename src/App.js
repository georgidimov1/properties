import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer/Footer'
import Menu from './Menu/Menu'
// import Fetch from './services/Fetch'
// import {setState} from 'react'


function App() {
    // function onClickFetching (){
    //    Fetch()
    //    .then(data => setState({data}));
    // }
  return (
    <div className= "bg-gra-01">
   <div className="App">
        <Menu/>
        <Footer/>
    </div>
    </div>
 
  );
}

export default App;
