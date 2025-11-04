document.addEventListener('DOMContentLoaded', function() {
    // Scroll suave para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Validación de formulario
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(email)) {
                alert('Por favor, ingresa un email válido.');
                return;
            }

            // Simular envío de correo y mostrar modal
            const modal = new bootstrap.Modal(document.getElementById('confirmModal'));
            modal.show();

            // Simular apertura de cliente de correo
            setTimeout(() => {
                window.location.href = `mailto:contacto@SweetTasterd.com?subject=Nuevo mensaje desde SweetTaste RD&body=Nombre: ${encodeURIComponent(document.getElementById('nombre').value)}%0AEmail: ${encodeURIComponent(email)}%0AMensaje: ${encodeURIComponent(document.getElementById('mensaje').value)}`;
            }, 1000);
        });
    }

    // Animación al hacer hover en tarjeta de contacto
    const contactCard = document.querySelector('#contacto .card');
    if (contactCard) {
        contactCard.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
        });
        contactCard.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
    }
});
