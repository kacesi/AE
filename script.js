const boton = document.querySelector(".menu-btn");
const capa = document.querySelector(".menu-overlay");

boton.addEventListener("click", () => {
    capa.classList.toggle("open");
});

const enlaces = document.querySelectorAll(".menu-overlay a");

enlaces.forEach(enlace => {
    enlace.addEventListener("click", () => {
        capa.classList.remove("open")
    });
});