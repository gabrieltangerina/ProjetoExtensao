
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);

// ------------- Função que calcula o tempo -------------

function calcularTempoPassado(data) {
    const dataPost = new Date(data);
    const dataAtual = new Date();

    const diferencaEmMilissegundos = dataAtual - dataPost;

    const segundos = Math.floor(diferencaEmMilissegundos / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);
    const meses = Math.floor(dias / 30);


    if (meses > 0) {
        return `${meses}m`
    } else if (dias > 0) {
        return `${dias}d`;
    } else if (horas > 0) {
        return `${horas}h`;
    } else if (minutos > 0) {
        return `${minutos}min`;
    } else {
        return `${segundos}s`;
    }
}

// ------------------ IntersectionObserver ------------------
const conteudos = document.querySelectorAll(".hidden");

const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    })
});

conteudos.forEach((conteudo) => myObserver.observe(conteudo));

// ------------------ SLIDE 1 ------------------
const titulo = document.querySelector(".titulo-header");

if(titulo.innerHTML == "Projeto de Extensão"){
    const slider1 = document.querySelectorAll('.imagens-slide1');
    const btnPrev1 = document.getElementById('prev-button1');
    const btnNext1 = document.getElementById('next-button1');
    const btnPrevMobile = document.getElementById('prev-button-mobile');
    const btnNextMobile = document.getElementById('next-button-mobile');

    const tempoPost1HTML = document.querySelector(".tempoDecorrido1");
    let dataPost1 = "2023-09-09T15:47:00";
    let tempoPassadoPost1 = calcularTempoPassado(dataPost1);
    tempoPost1HTML.innerHTML = tempoPassadoPost1;

    criaConteudo(slider1, btnPrev1, btnNext1, btnPrevMobile, btnNextMobile);


    const slider2 = document.querySelectorAll('.imagens-slide2');
    const btnPrev2 = document.getElementById('prev-button2');
    const btnNext2 = document.getElementById('next-button2');

    const btnPrevMobile2 = document.getElementById('prev-button-mobile2');
    const btnNextMobile2 = document.getElementById('next-button-mobile2');

    const tempoPost2HTML = document.querySelector(".tempoDecorrido2");
    let dataPost2 = "2023-09-20T21:43:00";
    let tempoPassadoPost2 = calcularTempoPassado(dataPost2);
    tempoPost2HTML.innerHTML = tempoPassadoPost2;

    criaConteudo(slider2, btnPrev2, btnNext2, btnPrevMobile2, btnNextMobile2);
}else if (titulo.innerHTML == "Grupo C") {
    const slider1 = document.querySelectorAll('.imagens-slide1');
    const btnPrev1 = document.getElementById('prev-button1');
    const btnNext1 = document.getElementById('next-button1');
    const btnPrevMobile = document.getElementById('prev-button-mobile');
    const btnNextMobile = document.getElementById('next-button-mobile');

    const tempoPost1HTML = document.querySelector(".tempoDecorrido1");
    let dataPost1 = "2023-09-09T15:47:00";
    let tempoPassadoPost1 = calcularTempoPassado(dataPost1);
    tempoPost1HTML.innerHTML = tempoPassadoPost1;

    criaConteudo(slider1, btnPrev1, btnNext1, btnPrevMobile, btnNextMobile);
} else if (titulo.innerHTML == "Grupo B") {
    const slider2 = document.querySelectorAll('.imagens-slide2');
    const btnPrev2 = document.getElementById('prev-button2');
    const btnNext2 = document.getElementById('next-button2');

    const btnPrevMobile2 = document.getElementById('prev-button-mobile2');
    const btnNextMobile2 = document.getElementById('next-button-mobile2');

    const tempoPost2HTML = document.querySelector(".tempoDecorrido2");
    let dataPost2 = "2023-09-20T21:43:00";
    let tempoPassadoPost2 = calcularTempoPassado(dataPost2);
    tempoPost2HTML.innerHTML = tempoPassadoPost2;

    criaConteudo(slider2, btnPrev2, btnNext2, btnPrevMobile2, btnNextMobile2);
}


function criaConteudo(imagens, botaoPrev, botaoNext, btnMobilePrev, btnMobileNext) {
    let currentSlide = 0;

    function hideSlider() {
        imagens.forEach(item => item.classList.remove('on'));
    };

    function showSlider() {
        imagens[currentSlide].classList.add('on');
    };

    function nextSlider() {
        hideSlider();
        if (currentSlide === imagens.length - 1) {
            currentSlide = 0;
        } else {
            currentSlide++;
        }
        showSlider();
    };

    function prevSlider() {
        hideSlider();
        if (currentSlide === 0) {
            currentSlide = imagens.length - 1;
        } else {
            currentSlide--;
        }
        showSlider();
    };

    botaoNext.addEventListener('click', nextSlider);
    botaoPrev.addEventListener('click', prevSlider);

    btnMobilePrev.addEventListener('click', prevSlider);
    btnMobileNext.addEventListener('click', nextSlider);
}