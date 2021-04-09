import './Cards.css'
import Card from './Card'
import React, {
  useEffect, 
  useState
} from 'react'
import services from '../services/services'

function Cards(){
  const [count, setCount] = useState([]);
  
  useEffect(()=>{
    services.getAll()
    .then((res)=>{setCount(res)})
    .catch(Error);
  },[])

return(
  count.map(
    (x)=>{
      return(
              <Card key={x._id} {...x} />
     
      )       
    }
  )
)

    
}

export default Cards; 