import './App.css';
import Test from './Test'
import Menu from './Menu'
import Contact from './ContactUs'

function App() {
  return (
    <div className="App">
      <Contact/>
      <Menu/>
      <Test
 
        firstName='Georgi'
        sirName= "Kanev"
         familyName= "Dimov"
      />
    </div>
  );
}

export default App;
