context = canvas.getContext('2d')
spots = []

document.body.style.margin = 0
canvas.style.display = 'block'
canvas.addEventListener('click', clickHandler)
canvas.addEventListener('mousemove', clickHandler)

onresize()

function onresize() {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}

function clickHandler(event) {
  var x = event.offsetX,
      y = event.offsetY,
      r = Math.random()*40,
      hue = Math.random()*360,
      light = 50,
      spot = {x, y, r, hue, light}
  spots.push(spot)
  draw(spot)
}

function draw(spot){
  spot.light+=0.5
  context.beginPath()
  context.fillStyle = 'hsl('+spot.hue+', 99%, '+spot.light+'%)'
  context.arc(spot.x, spot.y, spot.r++, 0, 2 * Math.PI)
  context.fill()
}

function drawSpots(){
  spots.forEach(draw)
  spots = spots.filter(spot=>spot.light<101)
}

setInterval(drawSpots, 40)
