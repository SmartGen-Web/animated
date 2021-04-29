const box=document.getElementById('box')
const box_1=document.getElementById('box1')

let positionX=0
let positionY=0

let animationX=setInterval(moveX,200)
let animationY=setInterval(moveY, 200)

function stopX(){
    clearInterval(animationX);
}

function stopY(){
    clearInterval(animationY);
}

function moveX(){
    positionX += 10;
    box.style.left = positionX + "px";

   if (positionX == 500){
       stopX()
   }
}

function moveY(){
    positionY += 10;
    box_1.style.top = positionY + "px";
    
   if (positionY == 400){
       stopY()
   }
} 