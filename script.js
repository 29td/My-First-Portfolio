let seeproject = document.getElementById('project');

function openSeeproject() {
  seeproject.classList.add('open-seeproject');
  seeproject.style.visibility = 'hidden';
  seeproject.style.display = 'block';
}

function closeSeeproject() {
  seeproject.classList.add('open-seeproject');
  seeproject.style.visibility = 'visible';
  seeproject.style.display = 'none';
}



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