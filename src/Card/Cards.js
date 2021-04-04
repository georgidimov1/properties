import './Cards.css'
import Card from './Card'
import {useEffect, useState} from 'react'
import services from '../services/services'




function Cards(){
  const [data, setData] = useState();
  function fetch (){
    return services.getAll()
    .then((res)=>res.json())
    .then((data)=>{setData(data)})
    .catch(Error);
  }

  useEffect(()=>{
    fetch();
  },[])
  console.log(data)
  
  return(
    
    <div className="cards">
          <Card />
    </div>
)
}

export default Cards;