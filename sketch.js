var bullet;
var wall;
var speed,weight,thickness;
var damage;
function setup() 
{
  createCanvas(600,400);
  

  bullet=createSprite(50,200,50,5);

  wall=createSprite(550,200,30,200);

  speed=Math.round(random(223,321));
  weight=Math.round(random(30,52));
  thickness=Math.round(random(22,83));
}

function draw() 
{
  background("black");  
  bullet.velocityX=speed;
 
  if(colliding(bullet,wall))
  {
    bullet.velocityX=0; 
    damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
  
    if(damage<10)
    {
      bullet.shapeColor="green";
    }
    if(damage>=10)
    {
      bullet.shapeColor="red";
    }
  
  }

  
  
  drawSprites();
}