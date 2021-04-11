import Cards from './Cards'
import {DataContext} from '../contexts/DataContext'
import React, {
    useEffect, 
    useState
  } from 'react'
import services from '../services/services'
function CardGrid (props){
    const [cardsAll, setCardsAll] = useState([]);
    useEffect(()=>{
        services.getAll()
        .then((res)=>{setCardsAll(res)})
        .catch(Error);
      },[])
        return ( <span>
{props.token!==null?
 <div className="cards">
     <DataContext.Provider value={cardsAll}>
        <Cards/>
     </DataContext.Provider>
</div>:
 <div className="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
    <blockquote className="welcome">
        <p>There is only one happiness in this life, to love and be loved.</p>
    </blockquote>
    <footer className="author">George Sand</footer>
</div>
}    
</span>  

    )
}
export default CardGrid;