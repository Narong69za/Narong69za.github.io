const runBtn = document.getElementById("runAI");

runBtn?.addEventListener("click", ()=>{

 document.getElementById("statusText").innerText="Processing...";

 setTimeout(()=>{
   document.getElementById("statusText").innerText="Ready";
 },2000);

});
