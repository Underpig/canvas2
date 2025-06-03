let canvas = document.getElementById('cl');
let ctx = canvas.getContext('2d');
let btn = document.getElementById('click');
let state =[];
let mouseX;
let mouseY;


btn.onclick = function() {
    state = [];
    
    ctx.clearRect(0,0,500,500);
    
    for (let y = 0; y < 5; y += 1) {
        state.push([])
        
        for (let i = 0; i < 5; i += 1) {
            let random = Math.random();
            if (random < 0.5) {
               state[y].push(true);
               ctx.fillRect(i * 100, y * 100, 100, 100);
                
            } else {
                ctx.strokeRect(i * 100, y * 100, 100, 100); 
                state[y].push(false);
            }
        }
    }
}


canvas.onclick = function(event) {
    mouseX = Math.floor(event.offsetX/100);
    mouseY = Math.floor(event.offsetY/100);
    
    if (state[mouseY][mouseX] == false) {
        state[mouseY][mouseX] = true;
        ctx.clearRect(mouseX * 100, mouseY * 100, 100, 100);
        ctx.fillRect(mouseX * 100, mouseY * 100, 100, 100);
        mouseX = null;
        mouseY = null;

    } else {
        state[mouseY][mouseX] = false;
        ctx.clearRect(mouseX * 100, mouseY * 100, 100, 100);
        ctx.strokeRect(mouseX * 100, mouseY * 100, 100, 100);
        mouseX = null;
        mouseY = null;
    }
}

  
  
  
 