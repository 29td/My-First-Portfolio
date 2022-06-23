const popup = document.querySelector('.menu-popup');
popup.innerHTML = `    <div class="seeproject" id="project">
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
`;

const Btn = document.querySelector('#ject');
const closeButton = document.querySelector('.cross');

// Btn.addEventListner('click', () => {
//     // popup.style.display = 'block';
//     popup.style.backgroundColor = 'red';

// });
function displayMenu() {
    popup.style.display = 'block';
    window.scroll({top: 0, left: 0});

}
Btn.addEventListener('click', displayMenu)
function closeMenu() {
    popup.style.display = 'none';
}
closeButton.addEventListener('click', closeMenu)



