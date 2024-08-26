const container = document.querySelector('.puzzle-container');
const pieces = [];
let selectedPiece = null;

// Generar piezas del rompecabezas
for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
        const piece = document.createElement('div');
        piece.classList.add('puzzle-piece');
        piece.style.backgroundPosition = `${col * 100 / 3}% ${row * 100 / 3}%`;
        piece.dataset.row = row;
        piece.dataset.col = col;
        container.appendChild(piece);
        pieces.push(piece);
    }
}

// Mezclar piezas al inicio
shufflePieces();

// Función para mezclar las piezas
function shufflePieces() {
    for (let i = pieces.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        swapPieces(pieces[i], pieces[j], false);
    }
}

// Función para intercambiar las posiciones de dos piezas
function swapPieces(piece1, piece2, checkComplete = true) {
    const tempRow = piece1.dataset.row;
    const tempCol = piece1.dataset.col;

    piece1.dataset.row = piece2.dataset.row;
    piece1.dataset.col = piece2.dataset.col;
    piece1.style.backgroundPosition = `${piece2.dataset.col * 100 / 3}% ${piece2.dataset.row * 100 / 3}%`;

    piece2.dataset.row = tempRow;
    piece2.dataset.col = tempCol;
    piece2.style.backgroundPosition = `${tempCol * 100 / 3}% ${tempRow * 100 / 3}%`;

    if (checkComplete) {
        // Verificar si el rompecabezas está completo
        checkPuzzleComplete();
    }
}

// Función para manejar el clic en una pieza
pieces.forEach(piece => {
    piece.addEventListener('click', () => clickPiece(piece));
});

function clickPiece(piece) {
    if (!selectedPiece) {
        selectedPiece = piece;
        piece.style.outline = '2px solid red'; // Resaltar la pieza seleccionada
    } else {
        swapPieces(selectedPiece, piece);
        selectedPiece.style.outline = 'none';
        selectedPiece = null;
    }
}

// Función para verificar si el rompecabezas está completo
function checkPuzzleComplete() {
    const isComplete = pieces.every(piece => {
        const row = parseInt(piece.dataset.row);
        const col = parseInt(piece.dataset.col);
        return piece.style.backgroundPosition === `${col * 100 / 3}% ${row * 100 / 3}%`;
    });

    if (isComplete) {
        alert('Felicidades borrachin');
    }
}