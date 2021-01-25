async function editFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="board-title"]').value;
  const board_description = document.querySelector('textarea[name="board-description"]').value;
  // const board_content = document.querySelector('input[name="board-content"]').value;

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  const response = await fetch(`/api/boards/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      description,
      // board_content
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/profile/');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.edit-board-form').addEventListener('submit', editFormHandler);
