import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer/Footer'
import Menu from './Menu/Menu'

function App() {
  let authData = {'isAuth': sessionStorage.getItem("authtoken"), 'username' : sessionStorage.getItem("username")}
  return (
  <div className="App bg-gra-01">
        <Menu auth={authData}/>
        <Footer/>
   </div>

  
  );
}

export default App;
