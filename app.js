const apiSkills=[
    {
        imagen: './assets/skills/html-5-svgrepo-com.svg',
        nombre: 'HTML',
        experiencia: new Date(2020, 06, 18)
    },
    {
        imagen: './assets/skills/css-3-svgrepo-com.svg',
        nombre: 'CSS',
        experiencia: new Date(2020, 06, 18)
    },
    {
        imagen: './assets/skills/javascript.svg',
        nombre: 'Javascript',
        experiencia: new Date(2020, 08, 23)
    },
    {
        imagen: './assets/skills/react.svg',
        nombre: 'React',
        experiencia: new Date(2021, 05, 07)
    },
    {
        imagen: './assets/skills/angular-icon.svg',
        nombre: 'Angular',
        experiencia: new Date(2021, 09, 07)
    },
    {
        imagen: './assets/skills/typescript-icon.svg',
        nombre: 'Typescript',
        experiencia: new Date(2021, 09, 07)
    },
    {
        imagen: './assets/skills/c-sharp.svg',
        nombre: 'C-Sharp',
        experiencia: new Date(2020, 04, 07)
    },
    {
        imagen: './assets/skills/dotnet.svg',
        nombre: '.NET',
        experiencia: new Date(2021, 01, 07)
    },
    {
        imagen: './assets/skills/python.svg',
        nombre: 'Python',
        experiencia: new Date(2020, 01, 01)
    },
    {
        imagen: './assets/skills/ionic-icon.svg',
        nombre: 'Ionic',
        experiencia: new Date(2022, 07, 07)
    },
    {
        imagen: './assets/skills/git-icon.svg',
        nombre: 'Git',
        experiencia: new Date(2021, 11, 07)
    },
    {
        imagen: './assets/skills/icons8-github.svg',
        nombre: 'GitHub',
        experiencia: new Date(2021, 11, 07)
    },
    {
        imagen: './assets/skills/sql-server.svg',
        nombre: 'Server',
        experiencia: new Date(2020, 09, 07)
    },
    {
        imagen: './assets/skills/oracle.svg',
        nombre: 'Oracle',
        experiencia: new Date(2020, 09, 07)
    },
    {
        imagen: './assets/skills/sqlite (2).svg',
        nombre: 'Sql Lite',
        experiencia: new Date(2020, 01, 01)
    },
    {
        imagen: './assets/skills/firebase.svg',
        nombre: 'Firebase',
        experiencia: new Date(2022, 07, 01)
    }
]
const apiProjects=[
    {
        id: '2',
        imagen: './assets/proyectos/top-100-cryptocurrencies.vercel.app.jpeg',
        nombre: 'top-100-cryptocurrencies',
        url: 'https://top-100-cryptocurrencies.vercel.app/',
        experiencia: ['React','Fetch Api'],
        descripcion: 'ApiCrypto es una web que ofrece un análisis fundamental del mercado de criptomonedas, seguiendo el precio, el volumen y la capitalización bursátil.'
    },
    {
        id: '3',
        imagen: './assets/proyectos/shabless.vercel.app.jpeg',
        nombre: 'Shabless E-Commerce',
        url: 'https://shabless.vercel.app/',
        experiencia: ['React','Firebase'],
        descripcion: 'Shabless es un ecommerce de accesorios para aquellos que buscan complementar su estilo personal con productos únicos y de calidad.'
    },
    {
        id: '4',
        imagen: './assets/proyectos/text-to-speech-gamma.vercel.app.jpeg',
        nombre: 'Text to Speech',
        url: 'https://text-to-speech-gamma.vercel.app/',
        experiencia: ['HTML',' CSS', 'Javascript'],
        descripcion: 'Text to Speech es un proyecto el cual su nombre lo describe completamente, en este podras poner tu texto y escucharlo y vice-versa.'
    },
    {
        id: '4',
        imagen: './assets/proyectos/argerlin-rent-a-car.png',
        nombre: 'Argerlin Rent A Car',
        url: 'https://github.com/KeuryLendof/Argerlin-Car-Rental',
        experiencia: ['HTML',' CSS', 'Javascript'],
        descripcion: ''
    },
    {
        id: '5',
        imagen: './assets/proyectos/geofig.png',
        nombre: 'GeoFig',
        url: 'https://github.com/KeuryLendof/GeoFig',
        experiencia: ['React'],
        descripcion: 'GeoFig es un sitio en el cual podras calcular el area de varias figuras geometricas de 2,3,5,6 y mas dimensiones, de manera rápida y sencilla.'
    },
    {
        id: '6',
        imagen: './assets/proyectos/web-trailers.png',
        nombre: 'Web-Trailers',
        url: 'https://github.com/KeuryLendof/Programacion-Web-Trailers',
        experiencia: ['TypeScript','C#','.NET','CSS'],
        descripcion: 'Web-Trailers es un proyecto donde se podran ver trailers, reseñas, actores y la valoraciones del publico.'
    }
]

const skillsContainer = document.getElementById('skills');
const projectsContainer = document.getElementById('max-slider');
const innerCursor = document.querySelector('.inner-cursor');
const outerCursor = document.querySelector('.outer-cursor');
const links = Array.from(document.querySelectorAll('a'));
const text = document.querySelector(".second-text");
const logo = document.getElementById('logo-top');

document.addEventListener("mousemove",moveCursor);
document.addEventListener('mousedown',()=>{
    innerCursor.classList.add('grow')
    outerCursor.classList.add('grow')
})
document.addEventListener('mouseup',()=>{
    innerCursor.classList.remove('grow')
    outerCursor.classList.remove('grow')
})
logo.addEventListener('click',()=>{
    window.scrollTo({top: 0});
})

function moveCursor(e){
    let x = e.clientX;
    let y = e.clientY;

    innerCursor.style.left = `${x}px`;
    innerCursor.style.top = `${y}px`;
    outerCursor.style.left = `${x}px`;
    outerCursor.style.top = `${y}px`;
}

function textLoad(){
    setTimeout(()=>{
        text.textContent = 'Software Developer'
    },0)
    setTimeout(()=>{
        text.textContent = 'Web Developer'
    },7000)
    setTimeout(()=>{
        text.textContent = 'Front-end Developer'
    },14000)
}
textLoad()
setInterval(textLoad,21000)

links.forEach((l)=>{
    l.addEventListener('mouseover',()=>{
        innerCursor.classList.add('grow')
        outerCursor.classList.add('grow')
    })
    l.addEventListener('mouseleave',()=>{
        innerCursor.classList.remove('grow')
        outerCursor.classList.remove('grow')
    })
})

apiSkills.forEach(s=>{

    var hoy = new Date();
    var tiempoPasado= hoy - s.experiencia;

    var segs = 1000;
    var mins = segs * 60;
    var hours = mins * 60;
    var days = hours * 24;
    var months = days * 30.416666666666668;
    var years = months * 12;

    var anos = Math.floor(tiempoPasado / years);
    tiempoPasado = tiempoPasado - (anos * years);
    var meses = Math.floor(tiempoPasado / months)

    var tiempoRecorrido = `${anos}.${meses} años`

    if(anos === 0){
        tiempoRecorrido = `${meses} meses`
    }else{
        tiempoRecorrido = `${anos}.${meses} años`
    }

    const content = `
        <article>
            <img id="image-skill" src="${s.imagen}" alt="">
            <h4 id="nombre-skill">${s.nombre}</h4>
            <p id="experiencia-skill">${tiempoRecorrido}</p>
        </article>
    `

    // document.getElementById('image-skill').setAttribute('src',s.imagen)
    // document.getElementById('nombre-skill').innerText = s.nombre;
    // document.getElementById('experiencia-skill').innerText = s.experiencia;

    skillsContainer.innerHTML += content;
})
// apiProjects.map(function(p){

//     const content = `
//         <section class="proyectos-container" data-id="${p.id}">

//             <article class="proyectos-texts">

//                 <h3>${p.nombre}</h3>
//                 <p>${p.descripcion}</p>
//                 <section class="chips-container">
//                     ${p.experiencia.map(function(e){
//                         return '<small>'+e+'</small>'
//                     }).join('')}
//                 </section>
//                 <a href="${p.url}">
//                     Ver proyecto <i class="fa fa-arrow-right"></i>
//                 </a>
                
//             </article>

//             <article class="proyectos-images">

//                 <img src="${p.imagen}">

//             </article>

//         </section>
//     `

//     projectsContainer.innerHTML += content;
// })

var device = navigator.userAgent;

if(device.match(/Iphone/i) || device.match(/Android/i) || device.match(/Ipod/i) || device.match(/J2ME/i)|| device.match(/       BlackBerry/i)|| device.match(/iPhone|iPad|iPod/i)|| device.match(/Opera Mini/i)|| device.match(/IEMobile/i)|| device.match(/Mobile/i)|| device.match(/Windows Phone/i)|| device.match(/windows mobile/i)|| device.match(/windows ce/i)|| device.match(/webOS/i)|| device.match(/palm/i)|| device.match(/bada/i)|| device.match(/series60/i)|| device.match(/nokia/i)|| device.match(/symbian/i)|| device.match(/HTC/i)|| device.match(/CriOS/i)){
   innerCursor.classList.add('grownone')
    outerCursor.classList.add('grownone')
}else{
    /*Soy una pc ninguna accion*/
}