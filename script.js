document.addEventListener("DOMContentLoaded", function () {
    let btn = document.getElementById("btnSubir");
  
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            btn.classList.add("show");
        } else {
            btn.classList.remove("show");
        }
    });
  
    btn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");
    const menuLinks = document.querySelectorAll("#navMenu a"); // Selecciona todos los enlaces del menú

    // Abrir/Cerrar menú
    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    // Cerrar menú al hacer clic en cualquier enlace
    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            navMenu.classList.remove("active");
        });
    });
});
