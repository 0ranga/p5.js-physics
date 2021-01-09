var mover;
var m1 = [];

function setup() {
    createCanvas(800, 600);
    mover = new Mover(10, width/2, height/2);

    for (let i = 0; i < 10; i++) {
        m1[i] = new Mover(random(0.1, 5), width/2, height/2);
    }
    
}
  
function draw() {
    background('#f1f1f1');

    // wind = createVector(0.05,0);
    // gravity = createVector(0,0.1*mover.mass);
    
    // mover.applyForce(wind);
    // mover.applyForce(gravity);
    // mover.display();
    // mover.update();
    // mover.checkEdges();

    for (let i = 0; i < m1.length; i++) {

        //wind and gravity force
        wind = createVector(0.009,0);
        gravity = createVector(0,0.1*m1[i].mass);

        m1[i].applyForce(wind);
        m1[i].applyForce(gravity);

        //friction force
        var c = 0.05;
        var friction = m1[i].velocity.copy();
        friction.mult(-1);
        friction.normalize();
        friction.mult(c);

        m1[i].applyForce(friction);


        //moving particles
        m1[i].display();
        m1[i].update();
        m1[i].checkEdges();
        
    }

    
    
}