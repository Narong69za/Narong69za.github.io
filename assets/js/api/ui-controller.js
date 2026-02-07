
document.addEventListener("DOMContentLoaded",()=>{

const btn=document.querySelector(".btn-ai-create");

if(btn){

btn.addEventListener("click",async()=>{

const result = await AI.createVideo("viral creator");

console.log(result);

});

}

});
