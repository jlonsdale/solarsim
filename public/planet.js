class Planet {

  constructor(distance,radius,rb) {

    this.colour = this.randomColour();
    this.ra = distance;
    this.rb = rb;
    this.radius = radius;
    this.period = 1;


    this.ra = distance;
    this.rb = rb;
    this.a = (this.ra+this.rb)/2
    this.b = Math.sqrt(this.ra*this.rb)

    this.e = (this.ra-this.rb)/(this.ra+this.rb)


    this.xPos = distance;
    this.yPos = 0;
    this.r = distance;
    this.theta = 3.141;

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

  updateTheta() {
    if(this.theta>2*Math.PI) {
      this.theta = 0;
    }
    else {
      this.theta+=0.01
    }
  }


  position() {

    var r = this.calcR()

    this.xPos = (this.r+this.radius)*Math.cos(this.theta)
    this.yPos = (this.r+this.radius)*Math.sin(this.theta)
    this.updateTheta()
  }


}
