
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var ground;

function setup() {
	createCanvas(1200, 800);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,750,1200,25);

	ball = new Wreck(500,400,70);

	sling = new Chain(ball.box,{x:500,y:100})

	box1 = new Box(900,100,70,70);
	box2 = new Box(900,100,70,70);
	box3 = new Box(900,100,70,70);
	box4 = new Box(900,100,70,70);
	box5 = new Box(900,100,70,70);
	box6 = new Box(900,100,70,70);

	box11 = new Box(800,100,70,70);
	box12 = new Box(800,100,70,70);
	box13 = new Box(800,100,70,70);
	box14 = new Box(800,100,70,70);
	box15 = new Box(800,100,70,70);
	box16 = new Box(800,100,70,70);
	box17 = new Box(800,100,70,70);
	box18 = new Box(800,100,70,70);

	box21 = new Box(700,100,70,70);
	box22 = new Box(700,100,70,70);
	box23 = new Box(700,100,70,70);
	box24 = new Box(700,100,70,70);
	box25 = new Box(700,100,70,70);
	box26 = new Box(700,100,70,70);
	box27 = new Box(700,100,70,70);
	box28 = new Box(700,100,70,70);
	box29 = new Box(700,100,70,70);
	box30 = new Box(700,100,70,70);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();

  ball.display();

  sling.display();
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();

 
}

function mouseDragged(){
	Matter.Body.setPosition(ball.box,{x:mouseX,y:mouseY});
}