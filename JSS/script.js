document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;
    let autoPlayTimer;

    function showSlide(index) {
        // Quitamos la clase activa a la imagen actual
        slides[currentIndex].classList.remove('active');
        
        // Calculamos el índice de forma circular (vuelve al inicio si se pasa del final, o va al final si baja de cero)
        currentIndex = (index + slides.length) % slides.length;
        
        // Añadimos la clase activa a la nueva imagen
        slides[currentIndex].classList.add('active');
        
        // Reiniciamos el temporizador para que no cambie abruptamente justo después de hacer clic
        resetTimer();
    }

    // Eventos para los botones de las flechas
    nextBtn.addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });

    prevBtn.addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    // Función para manejar el autoplay
    function startTimer() {
        autoPlayTimer = setInterval(() => {
            showSlide(currentIndex + 1);
        }, 5000); // Cambia cada 5 segundos
    }

    function resetTimer() {
        clearInterval(autoPlayTimer);
        startTimer();
    }

    // Inicializamos el temporizador automático
    startTimer();
});