class Paper {  
    constructor(x, y, radius){
        var options = {
            'restitution':0.5,
            'friction':1.5,
            'density':1.0,
            'isStatic' : false
        }
         this.radius = radius;
         this.x=x;
		this.y=y;
        this.body = Bodies.circle(this.x,this.y, radius, options);
        this.image=loadImage('paper.png');
	    World.add(world, this.body);
       
        
   }
   display(){
    var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.radius, this.radius)
			//ellipse(0,0,this.r, this.r);
			pop()

   }
}