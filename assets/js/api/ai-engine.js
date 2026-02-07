
const AI = {

async createVideo(prompt){

return await API.request("ai/create-video",{
prompt:prompt
});

},

async swapFace(data){

return await API.request("ai/swap-face",data);

}

};
