

const images = document.querySelectorAll('.img-panel');
const arrowFoward = document.getElementById('btn-foward');
const arrowBack = document.getElementById('btn-back');

let imagemAtual = 0

function esconderImagens() {
    imagens.forEach(imagem => {
        imagem.classList.remove('show')
    })
}

function mostrarImagem(){    
    imagens[imagemAtual].classList.add('show')
}

arrowFoward.addEventListener('click', function () {
    if(imagemAtual !== images.length - 1) {
        imagemAtual++        
    }

    esconderImagens()
    mostrarImagem()
})

arrowBack.addEventListener('click', function () {
    if (imagemAtual !== 0) {
        imagemAtual--
    }

    esconderImagens()
    mostrarImagem()
})