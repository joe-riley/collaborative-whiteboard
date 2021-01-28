async function newFormHandler(event) {
  event.preventDefault();

  // const title = document.querySelector('input[name="board-title"]').value;
  // const description = document.querySelector('textarea[name="board-description"]').value;
  const title = 'This is a new board';
  const description = 'This is a description for a new board!';
  const board_content = canvas.toDatalessJSON();

  const response = await fetch(`/api/boards`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      description,
      board_content,
    }),
    headers: {
      'Content-Type': 'application/json'
    },
  });

  if (response.ok) {
    document.location.replace('/profile');
  } else {
    alert(response.statusText);
  }
}

// document.querySelector('.new-board-form').addEventListener('submit', newFormHandler);
document.querySelector('#saveBoard').addEventListener('click', newFormHandler);
