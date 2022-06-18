import {get,post, put} from "../services/kinvey.js"

let kinveyModule = "appdata";
let type = "Kinvey"

let services = {
    postData (data){
        return post(kinveyModule,"dating", data, type)
    },
    getAll(){
        return get(kinveyModule,"dating", type)
    },
    getOne(_id){
        return get(kinveyModule,`dating/${_id}`, type)
    },
    userLogin(username, password){
        return post("user", "login", { username, password }, "Basic")
    },
    userLogout(){
        return fetch("https://baas.kinvey.com/user/kid_Hk7Ye1SEO/_logout", 
            {method : 'POST',
            headers: {
                'Authorization': `Kinvey ${sessionStorage.getItem(`authtoken`)}`,
                'X-Kinvey-API-Version': '1'
            }})    
      
    },
    sessionStore(data) {
        sessionStorage.setItem("authtoken", data._kmd.authtoken)
        sessionStorage.setItem("username", data.username)
        sessionStorage.setItem("userId", data._id)
   },
   postLikes (_id, data){
    return put(kinveyModule,`dating/${_id}`, data, type)
   }
}

    

export default services;