// Initialize navbar
document.addEventListener('DOMContentLoaded', function() {
  const elems = document.querySelectorAll('.sidenav');
  let options = [];
  const instances = M.Sidenav.init(elems, options);
});

// modal trigger
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  let options = [];
  var instances = M.Modal.init(elems, options);
});