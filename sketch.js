
// Ma'am when I load the project, it shows a lot of errors 

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint = Matter.Constraint
var rope,kid,ground
var tree,mango
var stone 

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,380,1600,50);
	kid = new Kid(100,290,20,90);
	tree = new Tree(700,280,60,200);
	mango = new Mango(750,300,50,50);
	stone = new Stone(90,260,50,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);

  ground.display();
  kid.display();
  tree.display();
  mango.display();
  stone.display();

  drawSprites();
 
}



