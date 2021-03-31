var fixedrect
var movingrect


function setup() {
  createCanvas(800,400);
 
 fixedrect= createSprite(400, 200, 50, 100);
 movingrect=createSprite(200,200,100,50);
  fixedrect.shapeColor="blue"
  movingrect.shapeColor="blue"
}

function draw() {
  background(255,255,255);  
  movingrect.x=mouseX
  movingrect.y=mouseY
  if( isTouching(movingrect,fixedrect)){
      fixedrect.shapeColor="yellow"
      movingrect.shapeColor="yellow"
    }
else{
  fixedrect.shapeColor="blue"
  movingrect.shapeColor="blue"
}
  drawSprites();
}
