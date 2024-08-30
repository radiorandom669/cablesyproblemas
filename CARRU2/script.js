document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.getElementById('main-image');
    const audioPlayer = document.getElementById('audio-player');
    const audioSource = document.getElementById('audio-source');
    const thumbnails = document.querySelectorAll('.thumbnails img');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    let currentIndex = 0;

    function updateMainImage(index) {
        const newImage = thumbnails[index];
        mainImage.src = newImage.src;
        audioSource.src = newImage.dataset.audio;
        audioPlayer.load();
        audioPlayer.play();
    }

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            currentIndex = index;
            updateMainImage(index);
        });
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + thumbnails.length) + thumbnails.length % thumbnails.length;
        updateMainImage(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % thumbnails.length;
        updateMainImage(currentIndex);
    });

    // Initialize with the first image and audio
    updateMainImage(currentIndex);
});
