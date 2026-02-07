document.addEventListener("DOMContentLoaded", () => {

const templateSelect = document.getElementById("templateSelect");
const statusText = document.getElementById("statusText");

// ===== LOAD TEMPLATE FROM URL =====

const urlParams = new URLSearchParams(window.location.search);
const templateFromURL = urlParams.get("template");

if(templateFromURL){

templateSelect.value = templateFromURL;
updateTemplateUI(templateFromURL);

}

// ===== CHANGE EVENT =====

templateSelect.addEventListener("change", () => {

updateTemplateUI(templateSelect.value);

});


// ===== UI STATE CONTROL =====

function updateTemplateUI(template){

switch(template){

case "dance":
statusText.innerText = "Dance Motion Ready";
break;

case "lipsync":
statusText.innerText = "AI LipSync Ready";
break;

case "faceswap":
statusText.innerText = "Face Swap Ready";
break;

case "darkviral":
statusText.innerText = "Dark Viral Mode Ready";
break;

default:
statusText.innerText = "Waiting...";
}

}

});
