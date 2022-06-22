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

//email validation
const email = document.querySelector('[type=email]');
const emailRegex = /^[a-z]+@[a-z]{3,}.[a-z]{2,}?.*([a-z]{2,})/g
const errorMsg = 'Please enter a lowercase email'
const errorMessage = document.querySelector('small')
const form = document.querySelector ('.form')

// errorMessage.textContent = "please enter a valid mail"; 



// function showMessage(email, message, type) {
//   const errorMessage = email.parentNode.querySelector('small')
//   errorMessage.textContent = message; 
//   if (type) {
//     return valid;
//   }
//   return invalid;
// }

// form.addEventListener('submit',(event) => {
//   if(showMessage(email) = invalid) {
//     event.preventDefault();
//     showMessage(email,errorMsg,false);
//   }
//   form.submit();
// })
