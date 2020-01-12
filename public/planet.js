class Planet {

  constructor(distance,radius) {
    this.colour = this.randomColour();
    this.distance = distance;
    this.radius = radius;
    this.period = 1;

    this.xPos = distance;
    this.yPos = 0;
    this.theta = 0;
  }

  randomColour() {
    var letters = '0123456789ABCDEF';
    var colour = '#';
    for (var i = 0; i < 6; i++) {
      colour += letters[Math.floor(Math.random() * 16)];
    }
    return colour;
  }

  updateTheta() {
    if(this.theta>2*Math.PI) {
      this.theta = 0;
    }
    else {
      this.theta+=0.01
    }
  }

  position() {
    console.log(this.theta)
    this.xPos = (this.distance+this.radius)*Math.cos(this.theta)
    this.yPos = (this.distance+this.radius)*Math.sin(this.theta)
    this.updateTheta()
  }


}
