// const popup = document.querySelector('.menu-popup');
const mobilePopup = document.querySelector('.menu-popup');
const desktopPopup = document.querySelector('.desktop-popup');

const project = {
    name: 'Multi Post Stories',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In repellendus doloribus aliquid quas cum provident harum similique rerum illo nam non, totam vero earum vitae delectus, debitis incidunt voluptatibus ipsa!',
    featuredImage: './assets/images/Snap.png',
    technologies: ['html', 'bootstrap', 'Ruby on rails'],
    linkToLiveVersion: 'https://29td.github.io/My-First-Portfolio/',
    linkToSource: 'https://github.com/29td/My-First-Portfolio'
};

const project1 = {
    name: 'Keeping track of hundreds  of components website',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    featuredImage: './assets/images/plc-dt.png',
    technologies: ['html', 'bootstrap', 'Ruby on rails'],
    linkToLiveVersion: 'https://29td.github.io/My-First-Portfolio/',
    linkToSource: 'https://github.com/29td/My-First-Portfolio'
};

mobilePopup.innerHTML = `    <div class="seeproject" id="project">
<div class="project-header">
    <span class="cross">&times;</span>
    <div class="project-title">${project.name}</div>
        
</div>
<div class="project-list">
<ul>
<li>${project.technologies[0]}</li>
<li>${project.technologies[1]}</li>
<li>${project.technologies[2]}</li>
</ul>
    </div> 
    <img src=${project.featuredImage} class="project-img" alt="img"/>   

    <div class="project-body">${project.description}</div>
<div class="hub">
    <button type="button" class="power" onclick="location.href='${project.linkToLiveVersion}'">See Live<span><img src="./assets/icons/Icon.svg" alt="img"></button></span>
    <button type="button" class="power" onclick="location.href='${project.linkToSource}'">See Source<span><img src="./assets/icons/Vector.png" alt="img"></button></span>
</div>
</div>
`;

desktopPopup.innerHTML = `    <div class="seeproject" id="project1">
<div class="project-header">
    <span class="crossdt">&times;</span>
    <div class="project-title">${project1.name}</div>
        
</div>
<div class="project-list">
<ul>
<li>${project1.technologies[0]}</li>
<li>${project1.technologies[1]}</li>
<li>${project1.technologies[2]}</li>
</ul>
    </div> 
    <img src=${project1.featuredImage} id="pop-up-img" alt="img"/>   

    <div class="project-body">${project1.description}</div>
<div class="hub">
    <button type="button" class="power" onclick="location.href='${project1.linkToLiveVersion}'">See Live<span><img src="./assets/icons/Icon.svg" alt="img"></button></span>
    <button type="button" class="power" onclick="location.href='${project1.linkToSource}'">See Source<span><img src="./assets/icons/Vector.png" alt="img"></button></span>
</div>
</div>
`;

const Btn = document.querySelector('#ject');
const Btn1 = document.querySelector('#ject1');
const closeButton = document.querySelector('.cross');
const closeButton1 = document.querySelector('.crossdt');
const hero = document.querySelector('#back');

const mediaQuery = window.matchMedia('(max-width: 768px)')
// Check if the media query is true
if (mediaQuery.matches) {
    function displayMenu() {
        mobilePopup.style.display = 'block';
        hero.style.display = 'block';
        window.scroll({top: 0, left: 0});
    
    }
    Btn.addEventListener('click', displayMenu)
    function closeMenu() {
        mobilePopup.style.display = 'none';
        hero.style.display = 'none';
    }
    Btn1.addEventListener('click', displayMenu)
    function closeMenu() {
        mobilePopup.style.display = 'none';
        hero.style.display = 'none';
    }
    closeButton.addEventListener('click', closeMenu)    
}
else {
    function displayMenu() {
        desktopPopup.style.display = 'block';
        hero.style.display = 'block';
        window.scroll({top: 0, left: 0});
    
    }
    Btn.addEventListener('click', displayMenu)
    function closeMenu() {
        desktopPopup.style.display = 'none';
        hero.style.display = 'none';
    }
    Btn1.addEventListener('click', displayMenu)
    function closeMenu() {
        desktopPopup.style.display = 'none';
        hero.style.display = 'none';
    }
    closeButton1.addEventListener('click', closeMenu)    
}
