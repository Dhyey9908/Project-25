class Dustbin{
    constructor(x,y){
        var options ={
            isStatic:true
        }
        this.leftWall = Bodies.rectangle(985,630,20,100,options);
        World.add(world,this.leftWall);
        this.rightWall = Bodies.rectangle(1165,630,20,200,options);
        World.add(world,this.rightWall);
        this.bottomWall = Bodies.rectangle(1075,580,200,20,options);
        World.add(world,this.bottomWall);
        this.image = loadImage("dustbin.png");
    }

    display(){
        var pos = this.bottomWall.position;
        fill("Green");
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,200,220);   
    }
}