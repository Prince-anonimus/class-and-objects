const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
//step1
var ground, ball;

var box1, box2, box3, box4, box5;
var pig1, pig2;
var log1, log2, log3, log4;
var bird;

function setup() {
    var canvas = createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, height, 1200, 20);
    // ground is an object
    //Ground() is a class or a blueprint

    box1 = new Box(700, 320, 70, 70);
    box2 = new Box(920, 320, 70, 70);
    box3 = new Box(700, 220, 70, 70);
    box4 = new Box(920, 220, 70, 70);
    box5 = new Box(810, 140, 70, 70);

    pig1 = new Pig(810, 350)
    pig2 = new Pig(810, 220)
    log1 = new Log(810, 260, 300, PI / 2)
    log2 = new Log(810, 170, 300, PI / 2)
    log3 = new Log(795, 140, 150, PI / 4)
    log4 = new Log(850, 140, 150, -PI / 4)
    bird = new Bird(100,100)
    





}

function draw() {
    background("lightblue");
    Engine.update(engine);

    //step5
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();
}