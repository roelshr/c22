class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.cannonImage = loadImage("./assets/canon.png")  
    this.cannonBaseImage = loadImage("./assets/cannonBase.png")
  }
  
  display(){
    push()
    translate(this.x, this.y)
    rotate(this.angle)
    imageMode(CENTER)
    rect(this.x, this.y,this.width, this.height, this.angle)
    image(this.cannonImage, 0, 0, this.width, this.height,)
    pop();

    image(this.cannonBaseImage, 70,20 , 200, 200)
    noFill();
  
  }

}


