// SLIDER DO HTML
const SLIDER = document.querySelector('.slider-container .slider');

// COLETANDO AS IMAGENS DO SLIDER (TODAS)
const SLIDER_IMAGES = document.querySelectorAll('.slider-container .slider img');

//SLIDER.style.transform = 'translateX(-150PX)';

// COLETANDO O COMPRIMENTO (WIDTH)DA PRIMEIRA IMAGEM
let imgs_width = SLIDER_IMAGES[0].clientWidth;

// CONTADOR DAS IMAGENS
let count = 1;
SLIDER.style.transform = `translateX(${-imgs_width * count}px)`;


// TEMPO DO EFEITO
const TRANSITION_DURATION = 0.9;


// ENVIANDO PARA A PROXIMA IMAGEM
function next(){
    if(count < SLIDER_IMAGES.length - 1){
        // AQUI UTILIZAREMOS A CRASE COMO UM TEMPLATE STRING
        SLIDER.style.transition = `transform ${TRANSITION_DURATION}s ease-in-out`;
        count++;
        SLIDER.style.transform = `translateX(${-imgs_width*count}px)`;
    }
    resetSlider();
}


// VOLTANDO PARA A IMAGEM ANTERIOR
function prev(){
    if(count > 0){
        SLIDER.style.transition = `transform ${TRANSITION_DURATION}s ease-in-out`;
        count--;
        SLIDER.style.transform = `translateX(${-imgs_width*count}px)`; 
    }
    resetSlider();
}

// VERIFICAR SE CHEGOU NAS IMAGENS CLONES

SLIDER.addEventListener('transitionend',()=>{
    if(SLIDER_IMAGES[count].id==="slider-clone-first"){
        count = 1;
        SLIDER.style.transition = `none`;
        SLIDER.style.transform = `translateX(${-imgs_width * count}px)`;
    }else if(SLIDER_IMAGES[count].id==="slider-clone-last"){
        count = SLIDER_IMAGES.lenght - 2;
        SLIDER.style.transition = `none`;
        SLIDER.style.transform = `translateX(${-imgs_width * count}px)`;

    }
});

// FUNÇÃO DO SLIDE PASSAR INDEPENDENTE DE CLIQUE
const TRANSITION_DELAY = 2;

let interval;
function startSlider(){
    interval = setInterval(next, TRANSITION_DELAY*1000);
}

function resetSlider(){
    clearInterval(interval);
    startSlider();

}


window.addEventListener('resize', ()=>{
    imgs_width = SLIDER_IMAGES[0].clientWidth;
    next();
});
startSlider();