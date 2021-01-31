async function saveBoardHandler(event) {
  event.preventDefault();

  const title = document.querySelector('#board-title').value;
  const description = document.querySelector('#board-description').value;
  const board_content = canvas.toDatalessJSON();
  console.log(board_content);

  const response = await fetch(`/boards`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      description,
      board_content,
    }),
    headers: {
      'Content-Type': 'application/json'
    },
  })

  const jsonified_response = await response.json();

  if (response.ok) {
    // document.location.replace(`/profile/${jsonified_response.user_id}`);
    // document.location.replace(`/profile/`);
  } else {
    alert(response.statusText);
  }
}

document.querySelector('#save-board').addEventListener('click', saveBoardHandler);

async function getUserBoards(user_id) {
  // event.preventDefault();

  const response = await fetch(`/users/${user_id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
  });

  if (response.ok) {
    //document.location.replace('/');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('#save-board').addEventListener('click', getUserBoards);

async function deleteFormHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  const response = await fetch(`/api/boards/${id}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    // document.location.replace('/profile/');
  } else {
    alert(response.statusText);
  }
}

// document.querySelector('.delete-board-btn').addEventListener('click', deleteFormHandler);