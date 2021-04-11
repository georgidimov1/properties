import { useHistory} from "react-router-dom";
import {useEffect} from 'react';
import services from "../services/services.js";

function Login (){
    let history = useHistory();
    function handleClick() {
      history.push("/");
     window.location.reload();
    }
    
    function onLoginSubmitHandler(e){
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;
            services.userLogin(username, password)
              .then(data => {
                services.sessionStore(data);
                console.log(data);
                handleClick();
                
                 })
               
              .catch(console.error('yes'));
        }
        useEffect(function () {
            document.title = `Please entry our credetials`;
        }, []);
        
  return ( 
            <div className="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
                <div className="wrapper wrapper--w780">
                     <div className="card card-3">
                        <div className="card-heading"></div>
                        <div className="card-body">
                            <h2 className="title">Login</h2>
                            <form onSubmit={onLoginSubmitHandler}>
                                <div className="input-group">
                                    <input className="input--style-3" type="text" placeholder="Username*" name="username" required/>
                                </div>
                      
                                <div className="input-group">
                                    <input className="input--style-3" type="password" placeholder="Password*" name="password" required/>
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
 export default Login;