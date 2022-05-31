
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world,engine;
var block1;
var block2;
var block3;
var ground;





function preload()
{
engine = Engine.create();
  world = engine.world;
}

function setup() {
	createCanvas(800, 700);



	
	
	var ground_options = {
		isStatic:true,

		
	}


	var bloco1options = {
		restitution:0.5,
		friction:0.02,
		frictionAir:0.9,


	}
	
	var bloco2options = {
		restitution:0.5,
		friction:0.02,
		frictionAir:0.5,


	}
	
	var bloco3options = {
		restitution:0.5,
		friction:0.02,
		frictionAir:0,
		


	}
	
  

	



	engine = Engine.create();
	world = engine.world;

	block1 = Bodies.rectangle(220,10,20,20,bloco1options);
	World.add(world,block1);

	block2 = Bodies.rectangle(400,10,40,20,bloco2options);
	World.add(world,block2);

	block3 = Bodies.circle(600,10,30,bloco3options);
	World.add(world,block3);

	ground = Bodies.rectangle(400,690,800,10,ground_options);
	World.add(world,ground);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");
  Engine.update(engine)

  
  push();
  
  fill("pink");
  rect(block1.position.x,block1.position.y,20,20);
  fill("yellow");
  rect(block2.position.x,block2.position.y,40,20);
  fill("blue");
  ellipse(block3.position.x,block3.position.y,30);

  pop();

  




  
  
 
  

	drawSprites();

 
}



