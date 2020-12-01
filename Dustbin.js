class Box {

    constructor(x,y,w,h,){

        var options ={
            restituion : 0.5,
            friction : 1,
            density : 0.2
          }
        this.box = Bodies.rectangle(x,y,w,h, options);
        this.width = w;
        this.height = h;
        World.add(world,this.box);
    }

    display(){
     push();
      translate(this.box.position.x,this.box.position.y);
      rotate(this.box.angle);  
      strokeWeight(20);
      stroke("black");
     rectMode(CENTER);
     fill("white");
     rect(0,0,this.width,this.height);
     pop();
    }


}