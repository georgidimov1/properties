const services={
  getAll (){
    let data = fetch('https://baas.kinvey.com/appdata/kid_Hk7Ye1SEO/dating',{
      method: 'GET', 
      headers: {
          'Content-Type': 'application/json',
          "Authorization" : "Basic a2lkX0hrN1llMVNFTzpmMzk2MjYyMzlmNzk0ZWVjODcyMTMxY2Y5OGMzM2E5Yg==",
  
        }
  })
  .then(response => response.json())
  .then(data =>  {return data});
  return data;
  },
createNew(dataUpload){
  let data = JSON.stringify(dataUpload);
 return fetch('https://baas.kinvey.com/appdata/kid_Hk7Ye1SEO/dating',{
    method: 'POST', 
    headers: {
        'Content-Type': 'application/json',
        "Authorization" : "Basic a2lkX0hrN1llMVNFTzpmMzk2MjYyMzlmNzk0ZWVjODcyMTMxY2Y5OGMzM2E5Yg==",
      
      },
      body: data
})
}
}

export default services;