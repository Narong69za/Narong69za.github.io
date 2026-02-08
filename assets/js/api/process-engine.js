/* ===============================
ULTRA LIVE PROCESS ENGINE
ADD ONLY — SAFE SYSTEM
================================ */

document.addEventListener("DOMContentLoaded", () => {

  const confirmBtn = document.querySelector("#confirmCreate");
  const statusBox = document.querySelector("#processStatus");
  const progressBar = document.querySelector("#progressBar");
  const resultPreview = document.querySelector("#resultPreview");

  if(!confirmBtn) return;

  confirmBtn.addEventListener("click", () => {

    statusBox.style.display = "block";
    let progress = 0;

    const stages = [
      "Uploading files...",
      "Analyzing AI model...",
      "Generating motion...",
      "Finalizing output..."
    ];

    let stageIndex = 0;

    const interval = setInterval(()=>{

      progress += 5;
      progressBar.style.width = progress + "%";

      if(progress % 25 === 0 && stageIndex < stages.length){
        statusBox.innerText = stages[stageIndex];
        stageIndex++;
      }

      if(progress >= 100){

        clearInterval(interval);

        statusBox.innerText = "Completed ✔";

        if(resultPreview){
          resultPreview.style.display = "block";
        }

      }

    },150);

  });

});
