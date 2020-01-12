$( document ).ready(function() {

    let canvas = document.getElementById('display');
    let ctx = canvas.getContext("2d");
    let myUniverse = new Universe(canvas);
    myUniverse.addPlanet(100,10)
    setInterval(draw, 10);

    //debugging method
    $( "#display" ).mousedown(function(canvas) {
      var offset = $(this).offset();
      var x1 = canvas.clientX- offset.left;
      var y1 = canvas.clientY- offset.top;
      console.log(myUniverse.getX(x1),myUniverse.getY(y1))
    });

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let star = myUniverse.star;
    drawBall(star.xPos,star.yPos,star.radius,star.colour);

    myUniverse.objects.forEach((item,index) => {
      item.position()
      drawBall(item.xPos,item.yPos,item.radius,item.colour)
    })

  };

  function drawBall(x,y,r,colour) {
    ctx.beginPath();
    x = myUniverse.convertX(x)
    y = myUniverse.convertY(y)
    ctx.arc(x, y, r, 0, Math.PI*2);
    ctx.fillStyle = colour;
    ctx.fill();
    ctx.closePath();
  };



});
