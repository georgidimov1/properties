import './Cards.css'
import Card from './Card'
import {useEffect} from 'react'
import services from '../services/services'




function Cards(){
  useEffect(()=>{
    services.getAll()
    .then(data=> console.log(data))
    .catch(ErrorEvent);
  },[])
    return (

<div className="cards">
  <Card />
</div>
    )
}

export default Cards;