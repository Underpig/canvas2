let canvas = document.getElementById('cl');
let ctx = canvas.getContext('2d');
let btn = document.getElementById('click');
let state =[];
let mouseX;
let mouseY;
let canvasSize = 500;
let squareAmount = 10;
let squareSize = canvasSize / squareAmount;



btn.onclick = function() {
    state = [];
    //написно делать вертикальные
    ctx.clearRect(0,0,500,500);

    for (let y = 0; y < canvasSize; y += 1) {
        state.push([])

        for (let i = 0; i < canvasSize; i += 1) {
            let random = Math.random();
            if (random < 0.5) {
                state[y].push(true);
                ctx.fillRect(i * squareSize , y * squareSize, squareSize, squareSize);

            } else {
                ctx.strokeRect(i * squareSize, y * squareSize, squareSize, squareSize);
                state[y].push(false);
            }
        }
    }
}


canvas.onclick = function(event) {
    mouseX = Math.floor(event.offsetX/squareSize);
    mouseY = Math.floor(event.offsetY/squareSize);

    if (state[mouseY][mouseX] === false) {
        state[mouseY][mouseX] = true;
        //alert (mouseX);
        ctx.clearRect(mouseX * squareSize, mouseY * squareSize, squareSize, squareSize);
        ctx.fillRect(mouseX * squareSize, mouseY * squareSize, squareSize, squareSize);

        mouseX = null;
        mouseY = null;

    } else {
        state[mouseY][mouseX] = false;
        //alert ('черная');
        ctx.clearRect(mouseX * squareSize, mouseY * squareSize, squareSize, squareSize);
        ctx.strokeRect(mouseX * squareSize, mouseY * squareSize, squareSize, squareSize);
        mouseX = null;
        mouseY = null;
    }
}

  
  
  
 