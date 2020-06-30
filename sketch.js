var mrect,frect;





function setup() {
  createCanvas(800,400);
  frect = createSprite(400, 200, 50, 50);
  frect.shapeColor = "red";
  mrect = createSprite(200,200,80,30);
  mrect.shapeColor =  "red" ;

}

function draw() {
  background(255,255,255); 
mrect.x = World.mouseX;
mrect.y = World. mouseY;
if(frect.x-mrect.x < frect.width/2+mrect.width/2 &&
  mrect.x-frect.x < frect.width/2+mrect.width/2 && 
  frect.y-mrect.y < frect.height/2+mrect.height/2 &&
  mrect.y-frect.y < frect.height/2+mrect.height/2 )
{frect.shapeColor = "green"
mrect.shapeColor = "green"
}
else{frect.shapeColor = "red"
mrect.shapeColor = "red"

}
  drawSprites();
}