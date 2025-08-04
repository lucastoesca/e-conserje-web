document.addEventListener('DOMContentLoaded', function() {

    // ==================== STICKY HEADER AL HACER SCROLL ====================
    const header = document.getElementById('header');
    function scrollHeader() {
        // Cuando el scroll es mayor a 50 viewport height, se añade la clase 'header-scrolled'
        if (this.scrollY >= 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    }
    window.addEventListener('scroll', scrollHeader);

    // ==================== NAVEGACIÓN CON SMOOTH SCROLL ====================
    const navLinks = document.querySelectorAll('.nav__link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevenir el comportamiento por defecto del ancla
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ==================== VALIDACIÓN DEL FORMULARIO DE CONTACTO ====================
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    contactForm.addEventListener('submit', function(e) {
        // Prevenir el envío real del formulario para esta demo
        e.preventDefault();

        // Obtener valores
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const condoName = document.getElementById('condo-name').value.trim();

        // Limpiar mensajes anteriores
        formMessage.textContent = '';
        formMessage.className = 'form__response';

        // Validación simple
        if (name === '' || email === '' || condoName === '') {
            formMessage.textContent = 'Por favor, completa todos los campos requeridos.';
            formMessage.classList.add('error');
            return;
        }

        // Simular envío exitoso
        formMessage.textContent = '¡Gracias! Tu solicitud ha sido enviada. Nos pondremos en contacto a la brevedad.';
        formMessage.classList.add('success');
        
        // Limpiar el formulario
        contactForm.reset();
    });

});