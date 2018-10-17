var moving = false
var name = 'emma'
var position = 0
var isGoingRight = true

function setup () {
    createCanvas(400, 200)
}
function draw() {
    background(100)

    console.log('The position is ' + position)

    
    rect(position, 0, 10, 10)
    if (isGoingRight == true) {
        position = position + 5
    }else {
        position = position - 5
    }
     if (position == 400){
     isGoingRight = false
}
if (position == 0)
{
    isGoingRight = true
}
text('My name is ' + name, 10, 30)
    }
    
    
    if (moving) {
       
      }
  
  function mousePressed() {
    if (!moving){
        moving = true
    }else {
        moving = false
    }
  }
