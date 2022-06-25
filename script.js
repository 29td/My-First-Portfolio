// hamburger
const ham = document.querySelector('.ham');
const logo = document.querySelector('.logo');
const icons = document.querySelector('.icons');
const iconLink = document.querySelector('.icon-link');
const iconLink2 = document.querySelector('.icon-link2');
const iconLink3 = document.querySelector('.icon-link3');

ham.addEventListener('click', () => {
  if (ham.classList.contains('active')) {
    ham.classList.remove('active');
    logo.style.visibility = 'visible';
    icons.style.display = 'none';
  } else {
    ham.classList.add('active');
    logo.style.visibility = 'hidden';
    icons.style.display = 'block';
  }
});

iconLink.addEventListener('click', () => {
  ham.classList.toggle('active');
  icons.style.display = 'none';
  logo.style.visibility = 'visible';
});

iconLink2.addEventListener('click', () => {
  ham.classList.toggle('active');
  icons.style.display = 'none';
  logo.style.visibility = 'visible';
});

iconLink3.addEventListener('click', () => {
  ham.classList.toggle('active');
  icons.style.display = 'none';
  logo.style.visibility = 'visible';
});

// email validation

document.querySelector('.btn6').addEventListener('click', (event) => {
  const email = document.getElementById('mail').value;
  const lowcaseError = document.querySelector('.error');
  const isLowerCase = (str) => str === str.toLowerCase();
  if (!isLowerCase(email)) {
    event.preventDefault();
    lowcaseError.innerHTML = 'Please use lowercase letters and proper mail pattern';
    setTimeout(() => {
      lowcaseError.innerHTML = '';
    }, 5000);
    
// popup window
const mobilePopup = document.querySelector('.menu-popup');
const desktopPopup = document.querySelector('.desktop-popup');

const project = {
  name: 'Multi Post Stories',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  featuredImage: './assets/images/Snap.png',
  technologies: ['html', 'bootstrap', 'Ruby on rails'],
  linkToLiveVersion: 'https://29td.github.io/My-First-Portfolio/',
  linkToSource: 'https://github.com/29td/My-First-Portfolio',
};

const project1 = {
  name: 'Keeping track of hundreds  of components website',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  featuredImage: './assets/images/plc-dt.png',
  technologies: ['html', 'bootstrap', 'Ruby on rails'],
  linkToLiveVersion: 'https://29td.github.io/My-First-Portfolio/',
  linkToSource: 'https://github.com/29td/My-First-Portfolio',
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

const btnOne = document.querySelectorAll('.button1');
const hero = document.querySelector('.hero');
const header = document.querySelector('header');
const port = document.querySelector('#my_portfolio');
const about = document.querySelector('#about_section');
const contact = document.querySelector('#contact_section');
const footer = document.querySelector('footer');
const closeButton = document.querySelector('.cross');
const closeButton1 = document.querySelector('.crossdt');

function displayMenu2() {
  mobilePopup.style.display = 'block';
  window.scroll({ top: 0, left: 0 });
  hero.style.filter = 'blur(5px)';
  header.style.filter = 'blur(5px)';
  port.style.filter = 'blur(5px)';
  contact.style.filter = 'blur(5px)';
  about.style.filter = 'blur(5px)';
  footer.style.filter = 'blur(5px)';
}
function closeMenu4() {
  mobilePopup.style.display = 'none';
  hero.style.filter = 'blur(0)';
  header.style.filter = 'blur(0)';
  port.style.filter = 'blur(0)';
  contact.style.filter = 'blur(0)';
  about.style.filter = 'blur(0)';
  footer.style.filter = 'blur(0)';
}

function displayMenu() {
  desktopPopup.style.display = 'block';
  hero.style.filter = 'blur(5px)';
  header.style.filter = 'blur(5px)';
  port.style.filter = 'blur(5px)';
  contact.style.filter = 'blur(5px)';
  about.style.filter = 'blur(5px)';
  footer.style.filter = 'blur(5px)';
  window.scroll({ top: 0, left: 0 });
}

function closeMenu2() {
  desktopPopup.style.display = 'none';
  hero.style.filter = 'blur(0)';
  header.style.filter = 'blur(0)';
  port.style.filter = 'blur(0)';
  contact.style.filter = 'blur(0)';
  about.style.filter = 'blur(0)';
  footer.style.filter = 'blur(0)';
}

function closeMenu() {
  desktopPopup.style.display = 'none';
  hero.style.filter = 'blur(0)';
  header.style.filter = 'blur(0)';
  port.style.filter = 'blur(0)';
  contact.style.filter = 'blur(0)';
  about.style.filter = 'blur(0)';
  footer.style.filter = 'blur(0)';
}

const mediaQuery = window.matchMedia('(max-width: 768px)');

btnOne.forEach((button) => {
  if (mediaQuery.matches) {
    button.addEventListener('click', displayMenu2);
    button.addEventListener('click', displayMenu2);
    closeButton.addEventListener('click', closeMenu4);
  } else {
    button.addEventListener('click', displayMenu);
    button.addEventListener('click', displayMenu);
    closeButton1.addEventListener('click', closeMenu);
    closeButton1.addEventListener('click', closeMenu2);
  }
});
