class Universe {

  constructor(canvas) {
    this.canvas = canvas;
    this.width = canvas.width;
    this.height = canvas.height;
    this.star = new Star()
    this.objects = []
  };

  addPlanet(distance,radius) {
    this.objects.push(new Planet(distance,radius))
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
