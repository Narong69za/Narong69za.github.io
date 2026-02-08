/* =================================
ULTRA TEMPLATE SYNC ENGINE
FINAL LOCK
================================ */

document.addEventListener("DOMContentLoaded", () => {

  const cards = document.querySelectorAll(".template-card");

  cards.forEach(card => {

    card.addEventListener("click", function(e){

      const templateName = this.dataset.template;

      if(!templateName) return;

      // save selected template
      localStorage.setItem("selectedTemplate", templateName);

      /* FORCE REDIRECT */
      window.location.href = "create.html";

    });

  });

});
