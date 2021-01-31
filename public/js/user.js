const signupHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#reg_username').value.trim();
  const password = document.querySelector('#reg_password').value.trim();
  const email = document.querySelector('#reg_email').value.trim();
  console.log(`In SignupHandler, got ${username}, ${password}, ${email}`);

  if (username && password && email) {
    
    const resp = await fetch('/users', {
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

    const jsonified_response = await resp.json()
    if(resp.ok) {
      document.location.replace(`/profile/${jsonified_response.id}`);
    } else {
      alert(jsonified_response.message);
    }
  };
}

document.querySelector('button[form="signup-form"]').addEventListener('click', signupHandler);

const loginHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#log_username').value.trim();
  const password = document.querySelector('#log_password').value.trim();

  if (username && password) {
    const resp = await fetch('/users/login', {
      method: 'post',
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        'content-type': 'application/json' 
      }
    })

    const jsonified_response = await resp.json()
    if(resp.ok) {
      document.location.replace(`/profile/${jsonified_response.id}`);
    } else {
      alert(jsonified_response.message);
    }
  };
}

document.querySelector('button[form="login-form"]').addEventListener('click', loginHandler);

const logoutHandler = async (event) => {
  event.preventDefault();
  const resp = await fetch('/users/logout', {
    method: 'post',
    headers: {
      'content-type': 'application/json' 
    }
  })

  if(resp.ok) {
    document.location.replace('/');
  } else {
    alert(resp.statusText);
  }
}

document.querySelector('#logout-btn').addEventListener('click', logoutHandler);

const profileHandler = async (event) => {
  event.preventDefault();
  const resp = await fetch('/profile', {
    method: 'post',
    headers: {
      'content-type': 'application/json' 
    }
  })
}

document.querySelector('#profile-btn').addEventListener('click', profileHandler);
