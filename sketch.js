const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbin,ground,paper;

function setup() {
	createCanvas(1200,700);


	engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(600,690,1200,20);
	dustbin = new Dustbin(1075,480);
	paper = new Paper(50,600,60);

  var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1500,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
//	Render.run(render);
}


function draw() {
  rectMode(CENTER);
  background("White");
  paper.display();
  ground.display();
  dustbin.display();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
   Matter.Body.applyForce(paper.body,paper.body.position,{x:200,y:-200});
  }
}