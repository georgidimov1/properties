import '../Card/Cards.css'
import {
    useState, 
    useEffect
} from 'react'
import services from '../services/services'

function Details(props){
const [data, setData] = useState(0);
  useEffect(()=>{
      services.getOne(props.match.params.id)
        .then(dataOne =>setData(dataOne))
           
  },[props])
  
  //console.log(props.match.params.id)
     return (
    <div className="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
      <div className="wrapper wrapper--w780">
           <div className="card card-3">
              <div className="card-heading"></div>
              <div className="card-body">
              <p className="img"><img src={data._filename} /></p>
              <h2 className="title">Name: {data.username}</h2>
                <h2 className="title">Zodiac sign: {data.zodiac}</h2>    
                   
             </div>
          </div>
      </div>
  </div>
      )}

export default Details;