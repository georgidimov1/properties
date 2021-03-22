fetch('https://baas.kinvey.com/appdata/kid_Hk7Ye1SEO/dating',{
    method: 'GET', 
    headers: {
        'Content-Type': 'application/json',
        "Authorization" : "Basic a2lkX0hrN1llMVNFTzpmMzk2MjYyMzlmNzk0ZWVjODcyMTMxY2Y5OGMzM2E5Yg==",

      }
})
.then(response => response.json())
  .then(data => console.log(data));

export default fetch;