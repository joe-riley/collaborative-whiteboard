const signupHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username').nodeValue.trim();
  const password = document.querySelector('#password').nodeValue.trim();
  const email = document.querySelector('#email').nodeValue.trim();

  if (username && password && email) {
    const resp = await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
        username,
        password,
        email,
      }),
      headers: {
        'content-type': 'application/json' 
      }
    })
    console.log(resp);
  };
}

document.querySelector('.modal-trigger').addEventListener('click', signupHandler);