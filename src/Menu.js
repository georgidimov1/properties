import '../src/Test.css'
import fetch from './services/fetch'
function Menu (){
    const buttons = ['Home', 'About', 'Services', 'Gallery']
    const listItems = buttons.map((x, i)=>{
           return <li key={i}><button className="show" href="#">{x}</button></li>
    })
    return (
    <div className="menu-wrapper">
        <ul className="menu">
            {listItems}
            <li><button className="show" onClick = {fetch}>Contact</button></li>
      </ul> 
      </div>
    )
    }


export default Menu;