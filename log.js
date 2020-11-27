class Log {
    constructor(x, y, height, angle) {
        var options = {
            restitution: 0.8,
            friction: 1.3,
            density: 1.0
        }
        this.body = Bodies.rectangle(x, y, 20, height, options);
        this.width = 20;
        this.height = height;
        Matter.Body.setAngle(this.body, angle);
        World.add(world, this.body);
    }


    display() {
        push()
        rectMode(CENTER);
        translate(this.body.position.x, this.body.position.y); // it keeps giving new x and y position to rect
        rotate(this.body.angle);
        // strokeWeight(4) //width of the boundary
        // stroke("green");
        fill("brown")
        rect(0, 0, this.width, this.height);
        pop();
    }
}