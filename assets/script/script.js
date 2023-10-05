// Tirando a seta no modo mobile
function tirarElementosDaPagina() {
    const larguraDaJanela = window.innerWidth;
    const tituloPagina = document.querySelector('.titulo-pagina'); 

    const tamanhoCelular = 655;

    if (larguraDaJanela <= tamanhoCelular) {
        const setasNext = document.querySelectorAll(".swiper-button-next");
        const setasPrev = document.querySelectorAll(".swiper-button-prev");

        setasNext.forEach(seta => {
            seta.style.display = 'none';
        })

        setasPrev.forEach(seta => {
            seta.style.display = 'none';
        })

        if(tituloPagina.innerHTML != "Projeto de Extensão"){
            menuHamburguer();
        }

    }else if(tituloPagina.innerHTML != "Projeto de Extensão" && larguraDaJanela < 1200){
        menuHamburguer();
    }
    else if(tituloPagina.innerHTML == "Projeto de Extensão"){
        linksGrupos();
    }
    else {
        const setasNext = document.querySelectorAll(".swiper-button-next");
        const setasPrev = document.querySelectorAll(".swiper-button-prev");

        setasNext.forEach(seta => {
            seta.style.display = 'flex';
        })

        setasPrev.forEach(seta => {
            seta.style.display = 'flex';
        })

        window.addEventListener('load', adicioanarUnderline());
    }

}

window.addEventListener('resize', tirarElementosDaPagina());

// Tirando o menu da tela principal
function tirarMenu(){
    const tituloPagina = document.querySelector('.titulo-pagina');
    const menu = document.querySelector('#nav');
    const iconeIF = document.querySelector('#imagem-logo');

    if (tituloPagina.innerHTML == "Projeto de Extensão") {
        menu.style.display = 'none';
        iconeIF.style.display = 'none';
    }
}

window.addEventListener('load', tirarMenu());


// ------------ Menu Hamburguer ----------------
function menuHamburguer(){
    const btnMobile = document.querySelector('#btn-mobile');
    
    function toggleMenu() {
        const nav = document.getElementById('nav');
        nav.classList.toggle('active');
    }

    btnMobile.addEventListener('click', toggleMenu);
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

const setasNext = document.querySelectorAll('.swiper-button-next');
const setasPrev = document.querySelectorAll('.swiper-button-prev');
const bolinhas = document.querySelectorAll('.swiper-pagination-bullet');

setasNext.forEach((seta) => seta.style.color = "#e7e7e7");
setasPrev.forEach((seta) => seta.style.color = "#e7e7e7");

// Adicionando a efeito underline para a página atual
function adicioanarUnderline(){
    const tituloPagina = document.querySelector('.titulo-pagina');
    const nomesGrupos = document.querySelectorAll('.nome-menu');

    nomesGrupos.forEach((e) => {
        if(e.innerHTML == tituloPagina.innerHTML){
            e.style.boxShadow = '0px 4px 0px 0px var(--cor-hover)';
        }
    })
}

function linksGrupos(){
    const itens = document.querySelectorAll(".item");

    itens.forEach((item) => {
        item.style.flexBasis = '250px';
    })
}

