import { useHistory } from "react-router-dom";
import {post} from '../services/kinvey.js'
function Register (){
    let history = useHistory();

    function handleClick() {
      history.push("/login");
    }
    function onCreateSubmitHandler(e){

        const username = e.target.username.value;
        const password = e.target.password.value;
        const rePassword = e.target.rePassword.value;

        if(password!==rePassword){
            return ( console.error(Error))
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
                                    <input className="input--style-3" type="text" placeholder="Password*" name="password" required/>
                                </div>
                                <div className="input-group">
                                    <input className="input--style-3" type="text" placeholder="Confirm Password*" name="rePassword" required/>
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
 export default Register;