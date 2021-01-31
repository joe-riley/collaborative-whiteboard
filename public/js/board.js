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
      userId,
    }),
    headers: {
      'Content-Type': 'application/json'
    },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('#save-board').addEventListener('click', saveBoardHandler);

async function getUserBoards(event) {
  event.preventDefault();

  console.log(session.userId);
  const response = await fetch(`/boards`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      description,
      board_content,
      userId,
    }),
    headers: {
      'Content-Type': 'application/json'
    },
  });

  if (response.ok) {
    document.location.replace('/');
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
    document.location.replace('/profile/');
  } else {
    alert(response.statusText);
  }
}

// document.querySelector('.delete-board-btn').addEventListener('click', deleteFormHandler);