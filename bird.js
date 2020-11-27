class Bird {
    constructor(x, y) {
        var options = {
            restitution: 0.5,
            fiction: 1.0,
            density: 1.5
        }
        this.body = Bodies.rectangle(x, y, 50, 50, options)
        this.width = 50;
        this.height = 50;
        World.add(world, this.body)
    }
    display() {
        var pos = this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
        push()
        rectMode(CENTER)
        fill("red")
        translate(pos.x, pos.y)
        rotate(this.body.angle)
        rect(0, 0, this.width, this.height)
        pop()
    }
}