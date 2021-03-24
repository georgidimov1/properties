import './App.css';
import Test from './Test'
import MenuHome from './Menu'
import Contact from './ContactUs'
//import Demo from './Demo'

function App() {
  return (
    <div className="App">
      <Contact/>
      <MenuHome/>
      <Test
 
        firstName='Georgi'
        sirName= "Kanev"
         familyName= "Dimov"
      />

    </div>
  );
}

export default App;
