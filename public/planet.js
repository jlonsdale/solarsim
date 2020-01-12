class Planet {

  constructor(distance,radius) {
    this.colour = this.randomColour();
    this.distance = distance;
    this.radius = radius;
    this.period = 1;

    this.e = 0.5;
    this.r = distance;
    this.a = 150;

    this.xPos = this.r
    this.yPos = 0;
    this.vel = 0;
    this.theta = 0;

    this.dt = 0.1
  }

  randomColour() {
    var letters = '0123456789ABCDEF';
    var colour = '#';
    for (var i = 0; i < 6; i++) {
      colour += letters[Math.floor(Math.random() * 16)];
    }
    return colour;
  }

  calcR() {
    this.r = this.a*(1-this.e*this.e)/(1+this.e*Math.cos(this.theta))
    return this.r
  }

  calcV() {
    return 1/Math.sqrt(this.calcR())
  }

  updateTheta() {
    if(this.theta>2*Math.PI) {
      this.theta = 0;
    }
    else {
      this.theta+=this.calcV()*this.dt
    }
  }


  position() {

    var r = this.calcR()
    console.log(this.calcV())

    this.xPos = (this.r+this.radius)*Math.cos(this.theta)
    this.yPos = (this.r+this.radius)*Math.sin(this.theta)
    this.updateTheta()
  }


}
