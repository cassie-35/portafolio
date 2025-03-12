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

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        fetch(form.action, {
            method: form.method,
            body: new FormData(form),
            headers: { 'Accept': 'application/json' }
        }).then(response => {
            if (response.ok) {
                alert("✅ ¡Mensaje enviado con éxito! Me comunicaré contigo pronto.");
                form.reset(); 
            } else {
                alert("❌ Hubo un problema al enviar el mensaje. Inténtalo de nuevo.");
            }
        }).catch(() => {
            alert("❌ Error al enviar el formulario.");
        });
    });
});