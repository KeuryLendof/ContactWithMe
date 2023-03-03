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
        imagen: './assets/skills/firebase.svg',
        nombre: 'Firebase',
        experiencia: '1 año'
    },
]

const skillsContainer = document.getElementById('skills');

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

