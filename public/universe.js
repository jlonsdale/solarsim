class Universe {

  constructor(canvas) {
    this.canvas = canvas;
    this.width = canvas.width;
    this.height = canvas.height;
    this.star = new Star()
    this.objects = []
  };

  addPlanet(distance,radius,rb) {
    console.log(this.objects.length)
    if (this.objects.length>7) {
      console.log(this.objects.length)
      this.objects.shift()
      this.objects.push(new Planet(distance,radius,rb))
    }
    else {this.objects.push(new Planet(distance,radius,rb))}
  }

  //Canvas coords to real coords
  getX(x) {
    return x-(this.width/2);
  };
  getY(y) {
    return y-(this.height/2);
  };

  //Real coords to canvas coords.
  convertX(x) {
    return x+(this.width/2);
  };
  convertY(y) {
    return y+(this.height/2);
  };

};
