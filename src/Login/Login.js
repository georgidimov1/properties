// import { useHistory } from "react-router-dom";
function Login (){
    function onCreateSubmitHandler(e){

    }
        
  return ( 
             <div className="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
                <div className="wrapper wrapper--w780">
                     <div className="card card-3">
                        <div className="card-heading"></div>
                        <div className="card-body">
                            <h2 className="title">Login</h2>
                            <form onSubmit={onCreateSubmitHandler}>
                                <div className="input-group">
                                    <input className="input--style-3" type="email" placeholder="Email*" name="email" required/>
                                </div>
                      
                                <div className="input-group">
                                    <input className="input--style-3" type="text" placeholder="Password*" name="password" required/>
                                </div>
                              
                                <div className="p-t-10">
                                    <button className="btn btn--pill btn--green" type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

    )}
 export default Login;