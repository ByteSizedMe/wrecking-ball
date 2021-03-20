class Ball{
    constructor(x,y,radius){
        var options = {
            density: 1,
            friction: 0.02

        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        
        strokeWeight(3)
        stroke("black");
        fill("white");
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}