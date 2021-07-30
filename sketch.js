Skip to content
whitehatjr
/
PiratesInvasionStage-2
adding movements to the cannon and shooting the cannonball out of it.

 MIT License
 0 stars  4 forks
Code
Issues
Pull requests
Actions
Projects
Wiki
More
PiratesInvasionStage-2/sketch.js /

whitehatjr updated assets and canvas size
 History
 0 contributors
54 lines (34 sloc)  990 Bytes
  
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;




function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  angle = -PI / 4;
  ground = new Ground(0, height - 1, width * 2, 1);
  tower = new Tower(150, 350, 160, 310);
  cannon = new Cannon(180, 110, 100, 50, angle);
  cannonBall = new CannonBall(cannon.x, cannon.y);

}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  

  Engine.update(engine);
  ground.display();
  

  cannon.display();
  tower.display();
  cannonBall.display()
 
}






function keyReleased() {
  if (keyCode === DOWN_ARROW) {
    cannonBall.shoot()
  }
}

