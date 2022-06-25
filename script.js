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
  }
});
