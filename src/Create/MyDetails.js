import './myDetails.css';
import React, { useEffect, useState} from 'react';
import services from "../services/services.js"
import { useHistory } from "react-router-dom";
import getZodiacSign from "../services/getZodiacsign"


function MyDetails (){
    let username = sessionStorage.getItem("username");
    let history = useHistory();

  function handleClick() {
    history.push("/");
  }
  const [gender, setGender] = useState('');
  function onChangeRadioButtonHandler(e){
   setGender(e.target.value)
      }
  function onCreateSubmitHandler(e){
         e.preventDefault();
         let data = {
                "_filename": e.target.myImage.value,
                "birthday": e.target.birthday.value,
                "gender": gender,
                "phone": e.target.phone.value,
                "zodiac": getZodiacSign(e.target.birthday.value)
            }
            services.postData(data)
            .then((data)=> {
                             handleClick()
                        
                    }
                )
            .catch(console.error())
            
}
    

        useEffect(function () {
            document.title = `Please entry our details`;
        }, []);

   
        
    return ( 
             <div className="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
                <div className="wrapper wrapper--w780">
                     <div className="card card-3">
                        <div className="card-heading"></div>
                        <div className="card-body">
                            <h2 className="title">{username}'s Registration Info</h2>
                            <form onSubmit={onCreateSubmitHandler}>
                                <div className="input-group">
                                <label htmlFor="picture">Select a Picture:</label>
                                <input className="input--style-3" id="picture" type="file" name="myImage" accept="image/x-png,image/gif,image/jpeg" />
                                </div>
                                <div className="input-group">
                                    <input className="input--style-3" type="datetime-local" name="birthday" required/>
                                    <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                                </div>
                                <div className="input-group" >
                                <h2 className="title">Select a Gender:</h2>
                                        <div className="radio">
                                        <input className="input--style-3" type="radio" id="male" name="drone" value="Male" onChange={onChangeRadioButtonHandler} required/>
                                        <label htmlFor="male">Male</label>
                                        </div>
                                        <div className="radio">
                                        <input className="input--style-3" type="radio" id="female" name="drone" value="Female" onChange={onChangeRadioButtonHandler} required/>
                                        <label htmlFor="female">Female</label>
                                        </div>
                                        <div className="radio">
                                        <input className="input--style-3" type="radio" id="other" name="drone" value="Other" onChange={onChangeRadioButtonHandler} required/>
                                        <label htmlFor="other">Other</label>
                                        </div>
                                    {/* <div className="rs-select2 js-select-simple select--no-search">
                                        <select name="gender">
                                            <option disabled >Gender</option>
                                            <option defaultValue="male">Male</option>
                                            <option defaultValue="female">Female</option>
                                            <option defaultValue="other">Other</option>
                                        </select>
                                        <div className="select-dropdown"></div>
                                    </div> */}
                                </div>
                                <div className="input-group">
                                    <input className="input--style-3" type="text" placeholder="Phone" name="phone"/>
                                </div>
                                <div className="p-t-10">
                                    <button className="btn btn--pill btn--green">Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

    )}
 export default MyDetails;