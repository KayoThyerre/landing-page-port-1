

const imagesPanel = document.querySelectorAll('.img-panel');
const arrowFoward = document.getElementById('btn-foward');
const arrowBackward = document.getElementById('btn-backward');
let imagemAtual = 0;

function hideImage() {
    imagesPanel.forEach(image => {
        image.classList.remove('show')
    });
}

function showImage() {
    imagesPanel[imagemAtual].classList.add('show');
}

arrowFoward.addEventListener('click', function() {
    const totalImages = imagesPanel.length - 1;
    if (imagemAtual === totalImages) {
        console.log('Chegou ao final, voltando para a primeira imagem');
        imagemAtual = 0; // Volta para a primeira imagem
    } else {
        imagemAtual++;
    }
    hideImage();
    showImage();
});

arrowBackward.addEventListener('click', function() {
    if (imagemAtual === 0) {
        console.log('Está na primeira imagem, indo para a última');
        imagemAtual = imagesPanel.length - 1; // Vai para a última imagem
    } else {
        imagemAtual--;
    }
    hideImage();
    showImage();
});

