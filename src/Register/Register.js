import { useHistory} from "react-router-dom";
import {useState} from 'react';
import {post} from '../services/kinvey.js'
function Register (){
    let history = useHistory();
    let[error, setError]=useState(false)

    function handleClick() {
      history.push("/login");
    }
    function onCreateSubmitHandler(e){

        const username = e.target.username.value;
        const password = e.target.password.value;
        const rePassword = e.target.rePassword.value;

        if(password!==rePassword){
            return ( 
                       setError(true)
                   
                    )
       }
       else{   
           e.preventDefault();
           post("user", "", { username, password }, "Basic")
            .then(data => {
              console.log(data);
              handleClick();
            })
            .catch(console.error());
    }
}
        
  return ( 
            <div className="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
                <div className="wrapper wrapper--w780">
                     <div className="card card-3">
                        <div className="card-heading"></div>
                        <div className="card-body">
                            <h2 className="title">Register</h2>
                            <form onSubmit={onCreateSubmitHandler}>
                                <div className="input-group">
                                    <input className="input--style-3" type="text" placeholder="Username*" name="username" required/>
                                </div>
                      
                                <div className="input-group">
                                    <input className="input--style-3" type="password" placeholder="Password*" name="password" required/>
                                </div>
                                <div className="input-group">
                                    <input className="input--style-3" type="password" placeholder="Confirm Password*" name="rePassword" required/>
                                </div>
                                <div style={{ color: 'red' }}>{error?'Passwords do not math':''}</div>
                                <div className="p-t-10">
                                    <button className="btn btn--pill btn--green">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                
            </div>

    )}
 export default Register;