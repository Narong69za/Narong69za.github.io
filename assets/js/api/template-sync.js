
/* =================================
ULTRA TEMPLATE → CREATE SYNC
ADD ONLY — SAFE LAYER
================================ */

document.addEventListener("DOMContentLoaded", function(){

  // หา template card ทั้งหมด
  const cards = document.querySelectorAll(".template-card");

  if(!cards.length) return;

  cards.forEach((card,index)=>{

      card.style.cursor="pointer";

      card.addEventListener("click", function(){

          // อ่านชื่อ template จาก heading
          const title = card.querySelector("h3");

          if(!title) return;

          const templateName = title.innerText.trim();

          // บันทึกลง localStorage
          localStorage.setItem("selectedTemplate", templateName);

          // redirect ไป create
          window.location.href = "create.html";

      });

  });

});
