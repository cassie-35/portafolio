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
    const menuLinks = document.querySelectorAll("#navMenu a"); 

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            navMenu.classList.remove("active");
        });
    });
});
