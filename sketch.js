const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var box1,box2,box3,box4,box5,box6;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
    var box_options ={
        //isStatic: true,
        restitution: 0.6
    }
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    box1= Bodies.rectangle(150,350,200,20,box_options);
    box2= Bodies.rectangle(250,350,200,20,box_options);
    box3= Bodies.rectangle(350,350,200,20,box_options);
    box4= Bodies.rectangle(150,300,200,20,box_options);
    box5= Bodies.rectangle(250,300,200,20,box_options);
    box6= Bodies.rectangle(350,300,200,20,box_options);
    World.add(world,ground);
    World.add(world,box1);
    World.add(world,box2);
    World.add(world,box3);
    World.add(world,box4);
    World.add(world,box5);
    World.add(world,box6);
    
    var ball_options ={
        restitution: 1.0,
        stiffness: 0.2,
        density: 0.04, 
        frictionAir: 0.005
    }

    ball = Bodies.circle(50,100,20, ball_options);
    World.add(world,ball);

    console.log(ground);
}

function draw(){
    background("teal");
    Engine.update(engine);
    
    rectMode(CENTER);
    fill("brown")
    rect(ground.position.x,ground.position.y,400,20);
    fill("green")
    rect(box1.position.x,box1.position.y,60,50);
    fill("red")
    rect(box2.position.x,box2.position.y,60,50);
    fill("yellow")
    rect(box3.position.x,box3.position.y,60,50);
    fill("purple")
    rect(box4.position.x,box4.position.y,60,50);
    fill("orange")
    rect(box5.position.x,box5.position.y,60,50);
    fill("blue")
    rect(box6.position.x,box6.position.y,60,50);

   
    fill("white")
    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);
}