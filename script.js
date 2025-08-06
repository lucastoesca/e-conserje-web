// Usamos un solo addEventListener para toda la lógica de la página.
document.addEventListener('DOMContentLoaded', function() {

    /* ==================== LÓGICA PARA HEADER FIJO (STICKY) ==================== */
    const header = document.getElementById('header');
    if (header) { // Buena práctica: verificar si el elemento existe
        const scrollHeader = () => {
            if (window.scrollY >= 50) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
        };
        window.addEventListener('scroll', scrollHeader);
    }

    /* ==================== LÓGICA PARA EL MENÚ MÓVIL ==================== */
    const navMenu = document.getElementById('nav-menu'),
          navToggle = document.getElementById('nav-toggle'),
          navLinks = document.querySelectorAll('.nav__link');

    // Función para mostrar/ocultar el menú
    const toggleMenu = () => {
        if (navMenu) {
            navMenu.classList.toggle('show-menu');
            navToggle.classList.toggle('active');
        }
    };

    // Mostrar u ocultar menú al hacer clic en el botón hamburguesa
    if (navToggle) {
        navToggle.addEventListener('click', toggleMenu);
    }

    // Ocultar el menú al hacer clic en un enlace (para navegar a secciones)
    const closeMenu = () => {
        if (navMenu) {
            navMenu.classList.remove('show-menu');
            navToggle.classList.remove('active');
        }
    };
    navLinks.forEach(link => link.addEventListener('click', closeMenu));


    /* ==================== LÓGICA PARA EL FORMULARIO DE CONTACTO ==================== */
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        const formMessage = document.getElementById('form-message');

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevenir el envío real del formulario

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const condoName = document.getElementById('condo-name').value.trim();

            if (name === '' || email === '' || condoName === '') {
                formMessage.textContent = 'Por favor, completa todos los campos requeridos.';
                formMessage.classList.add('error');
                return;
            }

            formMessage.textContent = '¡Gracias! Tu solicitud ha sido enviada.';
            formMessage.classList.remove('error');
            formMessage.classList.add('success');
            contactForm.reset();
        });
    }

    /* ==================== SMOOTH SCROLL (MODIFICADO) ==================== */
    // Cierre del menú
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Cierra el menú si está abierto (para móvil)
            if (navMenu && navMenu.classList.contains('show-menu')) {
                closeMenu();
            }

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

});