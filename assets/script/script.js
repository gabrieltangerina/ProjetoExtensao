// Tirando a seta no modo mobile
function tirarElementosDaPagina(){
    const larguraDaJanela = window.innerWidth;

    const tamanhoCelular = 655;

    if(larguraDaJanela <= tamanhoCelular){
        const setasNext = document.querySelectorAll(".swiper-button-next");
        const setasPrev = document.querySelectorAll(".swiper-button-prev");

        setasNext.forEach(seta => {
            seta.style.display = 'none';
        })

        setasPrev.forEach(seta => {
            seta.style.display = 'none';
        })

    }else{
        const setasNext = document.querySelectorAll(".swiper-button-next");
        const setasPrev = document.querySelectorAll(".swiper-button-prev");

        setasNext.forEach(seta =>{
            seta.style.display = 'flex';
        })

        setasPrev.forEach(seta =>{
            seta.style.display = 'flex';
        })
    }


}

tirarElementosDaPagina();
window.addEventListener('resize', tirarElementosDaPagina);


// ------------ Menu Hamburguer ----------------
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

const tempoPostado = document.querySelectorAll(".tempoPostagem");

tempoPostado.forEach((tempo) => {
    tempo.style.color = "#000000a6";
})


const titulo = document.querySelector(".titulo-header");
if(titulo.innerHTML == "Projeto de Extensão"){
    const tempoPost1HTML = document.querySelector(".tempoDecorrido1");
    let dataPost1 = "2023-08-27T15:47:00";
    let tempoPassadoPost1 = calcularTempoPassado(dataPost1);
    tempoPost1HTML.innerHTML = tempoPassadoPost1;


    const tempoPost2HTML = document.querySelector(".tempoDecorrido2");
    let dataPost2 = "2023-09-18T21:43:00";
    let tempoPassadoPost2 = calcularTempoPassado(dataPost2);
    tempoPost2HTML.innerHTML = tempoPassadoPost2;

}else if (titulo.innerHTML == "Grupo C") {

    const tempoPost1HTML = document.querySelector(".tempoDecorrido1");
    let dataPost1 = "2023-08-27T15:47:00";
    let tempoPassadoPost1 = calcularTempoPassado(dataPost1);
    tempoPost1HTML.innerHTML = tempoPassadoPost1;

} else if (titulo.innerHTML == "Grupo B") {

    const tempoPost2HTML = document.querySelector(".tempoDecorrido2");
    let dataPost2 = "2023-09-18T21:43:00";
    let tempoPassadoPost2 = calcularTempoPassado(dataPost2);
    tempoPost2HTML.innerHTML = tempoPassadoPost2;

}