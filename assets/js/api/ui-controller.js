const imageUpload = document.getElementById("imageUpload");
const videoUpload = document.getElementById("videoUpload");

imageUpload?.addEventListener("change", function(e){
 const file = e.target.files[0];
 if(file){
   document.getElementById("imagePreview").src =
   URL.createObjectURL(file);
 }
});

videoUpload?.addEventListener("change", function(e){
 const file = e.target.files[0];
 if(file){
   document.getElementById("videoPreview").src =
   URL.createObjectURL(file);
 }
});
