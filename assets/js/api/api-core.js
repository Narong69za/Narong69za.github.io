const API = {

endpoint:"https://your-api-endpoint.com",

async request(path,data){

const res = await fetch(`${this.endpoint}/${path}`,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(data)
});

return await res.json();

}

};
