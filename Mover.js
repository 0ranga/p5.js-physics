class Mover {
    constructor(m, x, y) {
        this.mass = m;
        this.location = createVector(x, y);
        this.velocity = createVector(0, 0);
        this.acceleration = createVector(0, 0);
        this.topspeed = 10;
    }

    update(){
        this.velocity.add(this.acceleration);
        // this.velocity.limit(this.topspeed);
        this.location.add(this.velocity);
        this.acceleration.mult(0);
    }

    applyForce(force) {
        var f = p5.Vector.div(force, this.mass);
        this.acceleration.add(f);
    }

    display(){
        stroke(0);
        fill(175, 100);
        ellipse(this.location.x,this.location.y,this.mass*16, this.mass*16);
    }

    checkEdges() {
        if (this.location.x > width) {
            this.location.x = width;
            this.velocity.x *= -1;
          } else if (this.location.x < 0) {
            this.location.x = 0;
            this.velocity.x *= -1;
          }
       
          if (this.location.y > height) {
            this.location.y = height;
            this.velocity.y *= -1;
          } else if (this.location.y < 0) {
            // this.location.y = height;
          }
      
    }

  }