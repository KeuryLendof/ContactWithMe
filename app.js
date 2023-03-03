const apiSkills=[
    {
        imagen: './assets/skills/html-5-svgrepo-com.svg',
        nombre: 'HTML',
        experiencia: '+2 años'
    },
    {
        imagen: './assets/skills/css-3-svgrepo-com.svg',
        nombre: 'CSS',
        experiencia: '+2 años'
    },
    {
        imagen: './assets/skills/javascript.svg',
        nombre: 'Javascript',
        experiencia: '+2 años'
    },
    {
        imagen: './assets/skills/react.svg',
        nombre: 'React',
        experiencia: '+2 años'
    },
    {
        imagen: './assets/skills/angular-icon.svg',
        nombre: 'Angular',
        experiencia: '+2 años'
    },
    {
        imagen: './assets/skills/typescript-icon.svg',
        nombre: 'Typescript',
        experiencia: '+1 años'
    },
    {
        imagen: './assets/skills/c-sharp.svg',
        nombre: 'C-Sharp',
        experiencia: '+2 años'
    },
    {
        imagen: './assets/skills/dotnet.svg',
        nombre: '.NET',
        experiencia: '1.5 años'
    },
    {
        imagen: './assets/skills/python.svg',
        nombre: 'Python',
        experiencia: '+3 años'
    },
    {
        imagen: './assets/skills/ionic-icon.svg',
        nombre: 'Ionic',
        experiencia: '1 año'
    },
    {
        imagen: './assets/skills/git-icon.svg',
        nombre: 'Git',
        experiencia: '+2años'
    },
    {
        imagen: './assets/skills/github-icon.svg',
        nombre: 'GitHub',
        experiencia: '+2 años'
    },
    {
        imagen: './assets/skills/microsoftsqlserver.svg',
        nombre: 'Sql Server',
        experiencia: '+2 años'
    },
    {
        imagen: './assets/skills/oracle.svg',
        nombre: 'Oracle',
        experiencia: '+2 años'
    },
    {
        imagen: './assets/skills/sqlite.svg',
        nombre: 'Sql Lite',
        experiencia: '3 años'
    },
    {
        imagen: './assets/skills/firebase.svg',
        nombre: 'Firebase',
        experiencia: '1 año'
    },
]
const apiProjects=[
    {
        imagen: './assets/proyectos/top-100-cryptocurrencies.vercel.app.jpeg',
        nombre: 'top-100-cryptocurrencies',
        url: 'https://top-100-cryptocurrencies.vercel.app/',
        experiencia: ['React','Fetch Api'],
        descripcion: 'ApiCrypto es una web que ofrece un análisis fundamental del mercado de criptomonedas, seguiendo el precio, el volumen y la capitalización bursátil.'
    },
    {
        imagen: './assets/proyectos/shabless.vercel.app.jpeg',
        nombre: 'Shabless E-Commerce',
        url: 'https://shabless.vercel.app/',
        experiencia: ['React','Firebase'],
        descripcion: 'Shabless es un ecommerce de accesorios para aquellos que buscan complementar su estilo personal con productos únicos y de calidad.'
    },
    {
        imagen: './assets/proyectos/text-to-speech-gamma.vercel.app.jpeg',
        nombre: 'Text to Speech',
        url: 'https://text-to-speech-gamma.vercel.app/',
        experiencia: ['HTML',' CSS', 'Javascript'],
        descripcion: 'Text to Speech es un proyecto el cual su nombre lo describe completamente, en este podras poner tu texto y escucharlo y vice-versa.'
    },
    {
        imagen: './assets/proyectos/argerlin-rent-a-car.png',
        nombre: 'Argerlin Rent A Car',
        url: 'https://github.com/KeuryLendof/Argerlin-Car-Rental',
        experiencia: ['HTML',' CSS', 'Javascript'],
        descripcion: ''
    },
    {
        imagen: './assets/proyectos/geofig.png',
        nombre: 'GeoFig',
        url: 'https://github.com/KeuryLendof/GeoFig',
        experiencia: ['React'],
        descripcion: 'GeoFig es un sitio en el cual podras calcular el area de varias figuras geometricas de 2,3,5,6 y mas dimensiones, de manera rápida y sencilla.'
    },
    {
        imagen: './assets/proyectos/web-trailers.png',
        nombre: 'Web-Trailers',
        url: 'https://github.com/KeuryLendof/Programacion-Web-Trailers',
        experiencia: ['TypeScript','C#','.NET','CSS'],
        descripcion: 'Web-Trailers es un proyecto donde se podran ver trailers, reseñas, actores y la valoraciones del publico.'
    }
]

const skillsContainer = document.getElementById('skills');
const projectsContainer = document.getElementById('projects');

apiSkills.forEach(s=>{

    const content = `
        <article>
            <img id="image-skill" src="${s.imagen}" alt="">
            <h4 id="nombre-skill">${s.nombre}</h4>
            <p id="experiencia-skill">${s.experiencia}</p>
        </article>
    `

    // document.getElementById('image-skill').setAttribute('src',s.imagen)
    // document.getElementById('nombre-skill').innerText = s.nombre;
    // document.getElementById('experiencia-skill').innerText = s.experiencia;

    skillsContainer.innerHTML += content;
})
apiProjects.map(function(p){
    
    const content =`
        <article>
            <figure>
                <img src="${p.imagen}" alt="">
            </figure>
            <a href="${p.url}" target="_blank">${p.nombre} <i class="fa fa-arrow-right"></i></a>
            <section class="chips-container">
                ${p.experiencia.map(function(e){
                    return '<small>'+e+'</small>'
                })}
            </section>
            <p>${p.descripcion}</p>
        </article>
    `
    projectsContainer.innerHTML += content;
})

