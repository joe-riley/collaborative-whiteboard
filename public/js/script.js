// Initialize navbar
document.addEventListener('DOMContentLoaded', () => {
  const elems = document.querySelectorAll('.sidenav');
  let options = [];
  const instances = M.Sidenav.init(elems, options);
});

// modal trigger
document.addEventListener('DOMContentLoaded', () => {
  var elems = document.querySelectorAll('.modal');
  let options = [];
  var instances = M.Modal.init(elems, options);
});

// confirm password on register after entering confirm password
const passwordEl = document.getElementById('password');
const confirmPasswordEl = document.getElementById('confirm_password');
console.log(`password1: ${passwordEl.textContent}, password2: ${confirmPasswordEl.textContent}`)
confirmPasswordEl.onkeyup = () => {
  console.log('hi');
  if(passwordEl.textContent !== confirmPasswordEl.textContent) {
    confirmPasswordEl.setCustomValidity('Passwords Do Not Match')
  } else {
    confirmPasswordEl.setCustomValidity('');
  }

};

