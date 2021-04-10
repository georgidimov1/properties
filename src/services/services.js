import {get,post} from "../services/kinvey.js"


let services = {
    postData (data){
        return post("appdata","dating", data, "Kinvey")
    },
    getAll(){
        return get("appdata","dating", "Kinvey")
    },
    getOne(_id){
        return get("appdata",`dating/${_id}`, "Kinvey")
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
   }
}

    

export default services;