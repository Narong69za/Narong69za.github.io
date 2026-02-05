
document.addEventListener("DOMContentLoaded", function(){

  const navHTML = `
  <header class="nav-header">
    <nav class="nav-master">
      <ul class="nav-menu">
        <li><a href="index.html">Home</a></li>
        <li><a href="packages.html">Packages</a></li>
        <li><a href="services.html">Services</a></li>
        <li><a href="templates.html">Templates</a></li>
        <li><a href="seo.html">SEO</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </nav>
  </header>
  `;

  document.body.insertAdjacentHTML("afterbegin", navHTML);

});
