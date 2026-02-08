/* ===============================
ULTRA LIVE PROCESS ENGINE FINAL
MERGE PREVIEW + PROCESS
ADD ONLY SAFE
================================ */

document.addEventListener("DOMContentLoaded", () => {

  const imageInput = document.querySelector("#imageUpload");
  const videoInput = document.querySelector("#videoUpload");
  const previewArea = document.querySelector("#previewArea");

  const confirmBtn = document.querySelector("#confirmCreate");
  const statusBox = document.querySelector("#processStatus");
  const progressBar = document.querySelector("#progressBar");
  const resultPreview = document.querySelector("#resultPreview");

  /* ===============================
     LIVE PREVIEW (UPLOAD)
  =================================*/

  if(imageInput){

    imageInput.addEventListener("change", e => {

      const file = e.target.files[0];
      if(!file) return;

      const url = URL.createObjectURL(file);

      previewArea.innerHTML += `
        <div style="margin-top:20px;">
          <h3>Image Preview</h3>
          <img src="${url}" style="max-width:100%;border-radius:12px;">
        </div>
      `;

    });

  }

  if(videoInput){

    videoInput.addEventListener("change", e => {

      const file = e.target.files[0];
      if(!file) return;

      const url = URL.createObjectURL(file);

      previewArea.innerHTML += `
        <div style="margin-top:20px;">
          <h3>Video Preview</h3>
          <video controls style="max-width:100%;border-radius:12px;">
            <source src="${url}">
          </video>
        </div>
      `;

    });

  }

  /* ===============================
     PROCESS ENGINE
  =================================*/

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

      progress += 4;
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

    },120);

  });

});
