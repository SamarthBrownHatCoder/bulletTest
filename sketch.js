var bullet, bulletX, bulletW;
var wall, thickness, damage;


function setup() {
  createCanvas(800,400);
  bullet = createSprite(150, 250, 35, 10);
  bullet.shapeColor = "white";
  bulletX = random(55,90);
  bullet.velocityX = bulletX;
  bulletW = Math.round(random(400,1500))

  thickness = Math.round(random(22,82))

  wall = createSprite(725,height/2,thickness,height/2)

  damage = (0.5 * bulletW * bulletX * bulletX)/(thickness * thickness * thickness)

}

function draw() {
  background("skyBlue");
  //wall.debug = true;
  //bullet.debug = true;
  bullet.depth = wall.depth +2;
  if(wall.x - bullet.x < wall.width/2 + bullet.width/2 && bullet.x - wall.x < wall.width/2 + bullet.width/2 && wall.y - bullet.y < wall.height/2 + bullet.height/2 && bullet.y - wall.y < wall.height/2 + bullet.height/2){
    bullet.velocityX = 0;
    if(damage <= 10){
      wall.shapeColor = "green";
      bullet.velocityX = 0;
    }

    if(damage > 10){
      wall.shapeColor = "red";
      bullet.velocityX = 0;
    }

  }
  console.log(damage)

  
  drawSprites();
}