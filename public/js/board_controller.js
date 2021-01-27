var canvas = new fabric.Canvas("c");

// create shape objects
var rect = new fabric.Rect({
  left: 100,
  top: 100,
  fill: 'red',
  width: 20,
  height: 20,
});

var circle = new fabric.Circle({
  radius: 20,
  fill: 'green',
  left: 200,
  top: 200
});

var triangle = new fabric.Triangle({
  width: 20,
  height: 30,
  fill: 'blue',
  left: 50,
  top: 50
});

// add shapes onto canvas
canvas.add(rect, circle, triangle);

// create text
var text = new fabric.Text('hello world', { left: 150, top: 150 });

// add text onto canvas
canvas.add(text);

canvas.renderAll();

// Example POST method implementation:
async function postBoard(title= '', board_content = {}, user_id = 1) {
  const data = {
    title,
    board_content,
    user_id,
  }

  const response = await fetch('http://localhost:3001/api/boards', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: data // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

const saveBoardBtn = document.getElementById('saveBoard');
saveBoardBtn.addEventListener('click', () => {
  let json_data = JSON.stringify(canvas.toDatalessJSON()); 
  console.log(json_data);
  let resp = await postBoard('default title', json_data, 1);
  console.log(resp);
})

//LOAD JSON DATA
// canvas_.loadFromJSON(JSON.parse(json_data), function(obj) {
//   canvas_.renderAll();
//    console.log(' this is a callback. invoked when canvas is loaded!xxx ');
   
//   canvas_.forEachObject(function(obj){
//     console.log(obj.name);
  
//     if(obj.name === 'recta'){      
//       obj.set({
//                 left: 100,
//                 top:200,
//                 height: 700,
//                 width: 700,
//                 scaleX: .35,
//                 scaleY:.35,
//         lockScalingY: .35
//             });
            
//       canvas_.add(obj); 
//     }
    
//   });

     
// });  

