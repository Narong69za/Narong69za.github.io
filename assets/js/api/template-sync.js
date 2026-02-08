document.addEventListener("DOMContentLoaded", function(){

  const cards = document.querySelectorAll(".template-card");

  cards.forEach(card => {

    card.addEventListener("click", function(){

      const template = this.dataset.template;

      if(!template) return;

      // redirect ไป create พร้อม param
      window.location.href = "create.html?template=" + template;

    });

  });

});
