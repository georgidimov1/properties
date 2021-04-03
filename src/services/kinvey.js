const baseUrl = 'https://baas.kinvey.com';
const appKey = 'kid_Hk7Ye1SEO';
const appSecret = '468fd248e2cd458f82046bf1c6def68e';

function createAuthorization(type) {
    return type === 'Basic'
        ? `Basic ${btoa(`${appKey}:${appSecret}`)}`
        : `Kinvey ${sessionStorage.getItem(`authtoken`)}`
}


function createHeader(type, httpMethod, data) {
    const headers = {
        method: httpMethod,
        headers: {
            'Authorization': createAuthorization(type),
            'Content-Type': 'application/json'
        }
    }
    if (httpMethod === 'POST' || httpMethod === 'PUT') {
        headers.body = JSON.stringify(data)
    }
    return headers;
}

function handleError(e) {
    if (!e.ok) {
        throw new Error(e.statusText);
    }
    return e;
}
function serilizeData(x) {
    if(x.status === 204){
        return x;
    }
    return x.json();
}
function fetchData(kinveyModule, endpoint, headers) {
    const url = `${baseUrl}/${kinveyModule}/${appKey}/${endpoint}`;
    console.log(url)
    console.log(headers)
    console.log(sessionStorage.getItem(`authtoken`))
    return fetch(url, headers)
        .then(handleError)
        .then(serilizeData)
}
function get(kinveyModule, endpoint, type) {
    const headers = createHeader(type, 'GET');
    return fetchData(kinveyModule, endpoint, headers);
}
function post(kinveyModule, endpoint, data, type) {
    const headers = createHeader(type, 'POST', data);
    return fetchData(kinveyModule, endpoint, headers);
}
function put(kinveyModule, endpoint, data, type) {
    const headers = createHeader(type, 'PUT', data);
    return fetchData(kinveyModule, endpoint, headers);
}
function del(kinveyModule, endpoint, type) {
    const headers = createHeader(type, 'DELETE');
    return fetchData(kinveyModule, endpoint, headers);
}

export {get,post,put,del} 