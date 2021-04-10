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
  
  let arrayLikes=[];
  const [likes, setCount] = useState(arrayLikes);
  function onLikeButtonClickHander(){
    setCount(likes+1)
    services.postData({...props, "likes":likes})
    .then(console.log('sucess'))
console.log(data._acl.creator)
console.log(sessionStorage.getItem("userId"))
    }
  
return (
    <div className="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
      <div className="wrapper wrapper--w780">
           <div className="card card-3">
              <div className="card-heading"></div>
              <div className="card-body">
              <img src={data._filename} width="500rem" alt ="profile" class="center"/>
              <h2 className="title">Name: {data.username}</h2>
                <h2 className="title">Zodiac sign: {data.zodiac}</h2> 
          
                {sessionStorage.getItem("userId")?
                <div>
                <p>Likes: {likes.length}</p>
                <button className="btn btn--pill btn--green" onClick={onLikeButtonClickHander}>Like</button>
                </div>
                :<div></div>
                }  
                   
             </div>
          </div>
      </div>
  </div>
      )}

export default Details;