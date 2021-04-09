import './Cards.css'
//import {Link} from 'react-router-dom'
import {useState} from 'react'

function Card(props){
  const [likes, setCount] = useState(0);
  function onLikeButtonClickHander(){setCount(likes + 1)}
  
  console.log(props)
     return (
      <div className="card bg-gra-01 font-poppins">
      <div className="wrapper wrapper--w780">
           <div className="card card-3">
              <div className="card-heading"></div>
              <div className="card-body">
              <h2 className="title">Name: {props.username}</h2>
                  <h2 className="title">Zodiac sign: {props.zodiac}</h2>
                      
                      <div className="p-t-10">
                          <p>Likes: {likes}</p>
                          <button className="btn btn--pill btn--green" onClick={onLikeButtonClickHander}>Like</button>
                      </div>
             </div>
          </div>
      </div>
  </div>
      )}

export default Card;