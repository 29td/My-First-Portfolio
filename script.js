const openProjectButton = document.querySelector('#project');
const closeProjectButtons = document.querySelector('#cross');
// const lay = document.querySelector('#lay');

openProjectButton.addEventListener('click', () => {
  const work = document.querySelector('.work-content');
  const div = document.createElement('div');
  div.textContent = 'all';
//   div.style.minHeight = '100vh';
//   div.style.backgroundColor = 'red';
  work.append(div);
  work.classList.add('pop-up');
})

// body.appendChild(lay);


// openProjectButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const project = document.querySelector(button.dataset.projectTarget);
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