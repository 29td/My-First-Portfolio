let seeproject = document.getElementById('project');
let card = `    <div class="seeproject" id="project">
<div class="project-header">
    <span class="cross">&times;</span>
    <div class="project-title">Multi Post Stories</div>
        
</div>
<div class="project-list">
        <ul>
            <li>html</li>
            <li>bootstrp</li>
            <li>Ruby on rails</li>
        </ul>
    </div>
    <img src="./assets/images/Snap.png" alt="img" class="project-img"/>
    <div class="project-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In repellendus doloribus aliquid quas cum provident harum similique rerum illo nam non, totam vero earum vitae delectus, debitis incidunt voluptatibus ipsa!
    </div>
<div class="hub">
    <button type="button" class="power">See Live<span><img src="./assets/icons/Icon.svg" alt="img"></button></span>
    <button type="button" class="power">See Source<span><img src="./assets/icons/Vector.png" alt="img"></button></span>
</div>
</div>
<div class="lay" id="lay"></div>
`

// function openSeeproject() {
//   seeproject.classList.add('open-seeproject');
//   seeproject.style.visibility = 'hidden';
//   seeproject.style.display = 'block';
// }

// function closeSeeproject() {
//   seeproject.classList.add('open-seeproject');
//   seeproject.style.visibility = 'visible';
//   seeproject.style.display = 'none';
// }



// const project = document.querySelectorAll('.seeProject');
// const button = document.querySelectorAll('#ject');
// var span = document.querySelector('.cross')[0];

// button.addEventListener('click', () => {
//   project.style.display = 'block';
// }

// ,span.addEventListener('click', () => {
//   project.style.display = 'none';
// }

// ,window.addEventListener('click', () => {
//   if (target == project) {
//     project.style.display = 'none';
//   }
// }


// const openProjectButton = document.querySelector('#ject');
// const closeProjectButton = document.querySelector('#cross');
// const lay = document.querySelector('#lay');

//   const work = document.querySelector('.work-content');
//   const div = document.createElement('div');
//   div.textContent = 'all';
//   div.style.minHeight = '100vh';
//   div.style.backgroundColor = 'red';
//   work.append(div);
//   work.classList.add('pop-up');
// })

// body.appendChild(lay);


// openProjectButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const project = document.querySelector(button.dataset.ject);
//     openProject(project);
//     })
// })

// closeProjectButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const Project = button.closest('.project');
//     closeProject(Project);
//     })
//   })

// function openProject(project) {
//   if (project == null)
//     return;
//     project.classList.add('active');
//     lay.classList.add('active');
// }

// function closeProject(project) {
//   if (project == null)
//     return;
//     project.classList.remove('active');
//     lay.classList.remove('active');
// }

let closeBtn = document.querySelector('.cross');
let popupDt = document.querySelector('#project-see');
let projectOpen = document.querySelector('#ject');
let bgDiv = document.querySelector('#lay1');
// let projectclose = document.querySelector('.home-content');

projectOpen.addEventListener('click', () => {
    popupDt.style.display = 'block';
    bgDiv.style.display = 'block';
    bgDiv.style.filter = 'blur(5px)';
})

closeBtn.addEventListener('click', () => {
    popupDt.style.display = 'none';
    projectclose.style.filter = 'blur(0)';
    bgDiv.style.display = 'none';
});
