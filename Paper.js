class Wreck {

    constructor(x,y,r){

        var options ={
            frictionAir : 0.01,
            density : 1.5
        }
        this.box = Bodies.circle(x,y,r,options);
        this.r = r;
        World.add(world,this.box);
    }

    display(){
        push();
        translate(this.box.position.x,this.box.position.y);
        rotate(this.box.angle);
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r);
        pop();
        
    }
}