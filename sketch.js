const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var b1,b2,b3;
var rope;
var ball;



function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Base(600,780,2000,20);
  b1 = new Building(900,100,500,200);
  b2 = new Building(900,100,500,200);
  b3 = new Building(900,100,500,200);
  ball = new Ball(200,200,150,150);
  rope = new Rope(ball.body,{x:500,y:50});

  

}

function draw() {
  background(180);
  Engine.update(engine);
  
ground.display();
b1.display();
b2.display();
b3.display();
ball.display();
rope.display();

}



function mouseDragged() {
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
 
}


