const popup = document.querySelector('.menu-popup');
const myButton = document.querySelector('#ject');
const closeButton = document.querySelector('.cross');
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

myButton.addEventListner('click', () => {
    popup.style.display = 'none';

});

closeButton.addEventListner('click', () => {
    popup.style.display = 'none';

});

