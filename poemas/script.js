document.addEventListener('DOMContentLoaded', function() {
    const listaItems = document.querySelectorAll('.poema-lista li');
    listaItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.transform = 'scale(1.2)';
        });
        item.addEventListener('mouseout', () => {
            item.style.transform = 'scale(1)';
        });
    });
});
