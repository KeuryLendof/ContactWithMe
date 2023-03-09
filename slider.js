const sliders = [...document.querySelectorAll('.proyectos-container')];
let arrowNext = document.getElementById('next');
let arrowBefore = document.getElementById('before');
let value;

arrowNext.addEventListener('click',()=>changePosition(1));
arrowBefore.addEventListener('click',()=>changePosition(-1));

function changePosition(change){

    const currentElement = Number(document.querySelector('.proyectos-container--show').dataset.id);

    value = currentElement;
    value+=change;

    if(value===0 || value === sliders.length+1){
        value = value ===0 ? sliders.length : 1;
    }

    sliders[currentElement-1].classList.toggle('proyectos-container--show')
    sliders[value-1].classList.toggle('proyectos-container--show')
    
}




// const sliders = [...document.querySelectorAll('.slider__body')];
// let arrowNext = document.getElementById('next');
// let arrowBefore = document.getElementById('before');
// let value;

// arrowNext.addEventListener('click',()=>changePosition(1));
// arrowBefore.addEventListener('click',()=>changePosition(-1));

// function changePosition(change){

//     const currentElement = Number(document.querySelector('.slider__body--show').dataset.id);

//     value = currentElement;
//     value+=change;

//     if(value===0 || value === sliders.length+1){
//         value = value ===0 ? sliders.length : 1;
//     }

//     sliders[currentElement-1].classList.toggle('slider__body--show')
//     sliders[value-1].classList.toggle('slider__body--show')
    
// }