class Chain {
    constructor(bodyA,pointB){
        var options={
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 1,
            length : 300
        }
        this.chain = Constraint.create(options);
        this.pointB = pointB; 
        World.add(world,this.chain);
    }
    display(){
        stroke("grey");
        strokeWeight(30);
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.pointB.x,this.pointB.y);
    }
}