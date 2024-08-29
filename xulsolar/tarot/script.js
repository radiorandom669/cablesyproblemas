// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencias a todas las imágenes y audios
    const clickableImages = document.querySelectorAll('.clickable');
    const audios = document.querySelectorAll('.audio');

    // Añadir un evento de clic a cada imagen
    clickableImages.forEach((image, index) => {
        image.addEventListener('click', function() {
            // Pausar cualquier audio que esté reproduciéndose
            audios.forEach(audio => audio.pause());

            // Reiniciar el audio asociado y reproducirlo
            audios[index].currentTime = 0;
            audios[index].play();
        });
    });
});
