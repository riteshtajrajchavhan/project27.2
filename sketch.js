const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20)
    log1   = new Log(360,200,50,PI/2 );
    log2   = new Log(410,200,50,PI/2 );
    log3   = new Log(460,200,50,PI/2 );
    log4   = new Log(510,200,50,PI/2 );
    log5   = new Log(560,200,50,PI/2 );
    log6   = new Log(450,200,300,PI/2 );
   
    ball1 = new Paper(400,300,40);
    ball2 = new Paper(450,300,40);
    ball3 = new Paper(450,300,40);
    ball4 = new Paper(500,200,40);
    ball5 = new Paper(450,300,40);
  
  
  
    chain1 = new Chain(log1.body,ball1.body,2,50);
    chain2 = new Chain(log2.body,ball2.body,2,50);
    chain3 = new Chain(log4.body,ball5.body,2,50);
    chain4 = new Chain(log5.body,ball4.body,2,50);
    chain5 = new Chain(log3.body,ball3.body,2,50);

   
}

function draw(){
    background("Aqua");
    Engine.update(engine);
   
ground.display();
log1.display();
ball1.display();
log2.display();
ball2.display();
ball5.display();
ball4.display();
ball3.display();
chain1.display();
chain2.display();
chain3.display();
chain4.display();
chain5.display();
log3.display();
log4.display();
log5.display();
log6.display();
}