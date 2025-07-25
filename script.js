document.addEventListener('DOMContentLoaded', function() {

    // Efecto de scroll en la barra de navegación
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Simulación de envío de formulario de contacto
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        // Previene el envío real de la página para la demostración
        event.preventDefault(); 

        // Recolectar datos (opcional, para la alerta)
        const name = document.getElementById('name').value;
        const serviceType = document.getElementById('service-type').value;

        // Mostrar un mensaje de confirmación
        alert(`Gracias, ${name}. Hemos recibido su consulta para un ${serviceType}.\nNos pondremos en contacto a la brevedad.`);

        // Limpiar el formulario después del envío
        contactForm.reset();
    });

});

// ======== LÓGICA DEL MENÚ HAMBURGUESA (NUEVO) ========
const hamburger = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu li a");

// Función para abrir/cerrar el menú
function toggleMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

// Evento para el clic en el icono
hamburger.addEventListener("click", toggleMenu);

// Función para cerrar el menú
function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// Cierra el menú cuando se hace clic en un enlace
navLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
});