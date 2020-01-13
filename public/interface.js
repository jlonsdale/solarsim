$( document ).ready(function() {

    let canvas = document.getElementById('display');
    let ctx = canvas.getContext("2d");
    let myUniverse = new Universe(canvas);
    const star = myUniverse.star
    myUniverse.addPlanet(100,10,50)
    setInterval(draw, 10);

    //debugging method
    $( "#display" ).mousedown(function(canvas) {
      var offset = $(this).offset();
      var x1 = canvas.clientX- offset.left;
      var y1 = canvas.clientY- offset.top;
      console.log(myUniverse.getX(x1),myUniverse.getY(y1))
    });

  $("#addPlanet").submit(function(event) {
    event.preventDefault();
    var ra = (($(this).find("[name=distance]").val())/100)*300;
    var radius = (($(this).find("[name=radius]").val())/100)*star.radius;
    var rb = (($(this).find("[name=rb]").val())/100)*ra
    myUniverse.addPlanet(ra,radius,rb)
  })

  function draw() {
    updatePlanet()
    ctx.clearRect(0, 0, canvas.width, canvas.height);

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

  function updatePlanet() {
    myUniverse.objects.forEach((item, index) => {
      $('#'+index).css('background-color', item.colour);
      $('#'+index).text('Semi-Major Axis: '+item.a.toFixed(1)+', '+'Semi-Minor Axis '+item.b.toFixed(1)+', '+'Excentricity '+item.e.toFixed(1));
    })
  }



});
