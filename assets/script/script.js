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
