var register = document.getElementById('register');

var modal = document.getElementById('modal');

var registerForm = document.getElementById('register--form');

var loginForm = document.getElementById('login--form');

register.onclick = function() {
    modal.classList.remove('hidden__modal');
    loginForm.classList.add('hidden__modal');
};

var login = document.getElementById('login');

login.onclick = function() {
    modal.classList.remove('hidden__modal');
    registerForm.classList.add('hidden__modal');
}

var controlBack = document.querySelectorAll('.auth-form__control-back');

controlBack.forEach(function(button) {
  button.onclick = function () {
    modal.classList.add('hidden__modal');
    registerForm.classList.remove('hidden__modal');
    loginForm.classList.remove('hidden__modal');
  };
});