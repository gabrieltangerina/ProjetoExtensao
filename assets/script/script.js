const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);

// ------------------ SLIDE 1 ------------------
const slider1 = document.querySelectorAll('.imagens-slide1');
const btnPrev1 = document.getElementById('prev-button1');
const btnNext1 = document.getElementById('next-button1');
const btnPrevMobile = document.getElementById('prev-button-mobile');
const btnNextMobile = document.getElementById('next-button-mobile');

let currentSlide = 0;

function hideSlider(){
    slider1.forEach(item => item.classList.remove('on'));
}

function showSlider(){
    slider1[currentSlide].classList.add('on');
}

function nextSlider(){
    hideSlider();
    if(currentSlide === slider1.length - 1){
        currentSlide = 0;
    }else{
        currentSlide++;
    }
    showSlider();
}

function prevSlider(){
    hideSlider();
    if(currentSlide === 0){
        currentSlide = slider1.length - 1;
    }else{
        currentSlide--;
    }
    showSlider();
}

btnNext1.addEventListener('click', nextSlider)
btnPrev1.addEventListener('click', prevSlider)

btnPrevMobile.addEventListener('click', prevSlider)
btnNextMobile.addEventListener('click', nextSlider)

// ------------------ SLIDE 2 ------------------
const slider2 = document.querySelectorAll('.imagens-slide2');
const btnPrev2 = document.getElementById('prev-button2');
const btnNext2 = document.getElementById('next-button2');

const btnPrevMobile2 = document.getElementById('prev-button-mobile2');
const btnNextMobile2 = document.getElementById('next-button-mobile2');


let currentSlide2 = 0;

function hideSlider2(){
    slider2.forEach(item => item.classList.remove('on'));
}

function showSlider2(){
    slider2[currentSlide2].classList.add('on');
}

function nextSlider2(){
    hideSlider2();
    if(currentSlide2 === slider2.length - 1){
        currentSlide2 = 0;
    }else{
        currentSlide2++;
    }
    showSlider2();
}

function prevSlider2(){
    hideSlider2();
    if(currentSlide2 === 0){
        currentSlide2 = slider2.length - 1;
    }else{
        currentSlide2--;
    }
    showSlider2();
}


btnNext2.addEventListener('click', nextSlider2)
btnPrev2.addEventListener('click', prevSlider2)

btnPrevMobile2.addEventListener('click', prevSlider2)
btnNextMobile2.addEventListener('click', nextSlider2)

// ------------------ SLIDE 3 ------------------
const slider3 = document.querySelectorAll('.imagens-slide3');
const btnPrev3 = document.getElementById('prev-button3');
const btnNext3 = document.getElementById('next-button3');

const btnPrevMobile3 = document.getElementById('prev-button-mobile3');
const btnNextMobile3 = document.getElementById('next-button-mobile3');


let currentSlide3 = 0;

function hideSlider3(){
    slider3.forEach(item => item.classList.remove('on'));
}

function showSlider3(){
    slider3[currentSlide3].classList.add('on');
}

function nextSlider3(){
    hideSlider3();
    if(currentSlide3 === slider3.length - 1){
        currentSlide3 = 0;
    }else{
        currentSlide3++;
    }
    showSlider3();
}

function prevSlider3(){
    hideSlider3();
    if(currentSlide3 === 0){
        currentSlide3 = slider3.length - 1;
    }else{
        currentSlide3--;
    }
    showSlider3();
}


btnNext3.addEventListener('click', nextSlider3)
btnPrev3.addEventListener('click', prevSlider3)

btnPrevMobile3.addEventListener('click', nextSlider3)
btnNextMobile3.addEventListener('click', prevSlider3)

