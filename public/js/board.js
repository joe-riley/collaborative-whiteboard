
async function newFormHandler(event) {
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
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('#save-board').addEventListener('click', newFormHandler);
