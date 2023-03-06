const inputUsername = document.querySelector('.input-username');
const inputPassword = document.querySelector('.input-password');
const submitToMain = document.querySelector('.submit-to-main');
const wrong = document.querySelector('.wrong');

submitToMain.addEventListener('click', function () {
  if (
    inputUsername.value === 'Admin' &&
    inputPassword.value === 'myPassword1'
  ) {
    submitToMain.setAttribute('href', 'main.html');
  } else {
    wrong.style.display = 'block';
    setTimeout(() => {
      wrong.style.display = 'none';
    }, 2000);
  }
});
