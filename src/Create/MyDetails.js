import './myDetails.css';
import React, { useEffect} from 'react';
//import ErrorHandler from "../ErrorHandler/ErrorHandler"
import {post} from "../services/kinvey.js"
import { useHistory } from "react-router-dom";


function MyDetails (){
    let username = sessionStorage.getItem("username");
    let history = useHistory();

  function handleClick() {
    history.push("/");
  }
    function onCreateSubmitHandler(e){
         e.preventDefault();
            let data = {
                "_filename": e.target.myImage.value,
                "birthday": e.target.birthday.value,
                "gender":  e.target.gender.value,
                "email": e.target.email.value,
                "phone": e.target.phone.value,
            }
            post(
                "appdata",
                "dating",
                data,
                "Kinvey"
              )
            .then(
                (data)=> {
                    if(data.status===201)
                    {
                        handleClick()
                        console.log(data.status)
                    }
                })
            
                                     }
    

        useEffect(function () {
            document.title = `Please entry our details`;
        }, []);
        
        // const [value, onChange] = useState(new Date());
    return ( 
             <div className="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
                <div className="wrapper wrapper--w780">
                     <div className="card card-3">
                        <div className="card-heading"></div>
                        <div className="card-body">
                            <h2 className="title">{username}/'s Registration Info</h2>
                            <form onSubmit={onCreateSubmitHandler}>
                                <div className="input-group">
                                    <input className="input--style-3" type="text" placeholder="Name" name="name"/>
                                </div>
                                <div className="input-group">
                                <input className="input--style-3" type="file" name="myImage" accept="image/x-png,image/gif,image/jpeg" />
                                </div>
                                <div className="input-group">
                                    <input className="input--style-3" type="datetime-local" name="birthday"/>
                                    <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                                </div>
                                <div className="input-group">
                                    <div className="rs-select2 js-select-simple select--no-search">
                                        <select name="gender">
                                            <option disabled >Gender</option>
                                            <option defaultValue="male">Male</option>
                                            <option defaultValue="female">Female</option>
                                            <option defaultValue="other">Other</option>
                                        </select>
                                        <div className="select-dropdown"></div>
                                    </div>
                                </div>
                                <div className="input-group">
                                    <input className="input--style-3" type="text" placeholder="Phone" name="phone"/>
                                </div>
                                <div className="p-t-10">
                                    <button className="btn btn--pill btn--green">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

    )}
 export default MyDetails;