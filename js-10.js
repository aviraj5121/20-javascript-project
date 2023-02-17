// Create a ball object
var ball = {
    x: 250, // X-coordinate of the ball's center
    y: 350, // Y-coordinate of the ball's center
    radius: 10, // Radius of the ball
    dx: 2, // Horizontal velocity of the ball
    dy: -2 // Vertical velocity of the ball
  };
  
  // Select the ball and brick elements
  var ballElem = document.getElementById("ball");
  var bricks = document.getElementsByClassName("brick");
  
  // Add event listener to move the paddle with the mouse
  document.addEventListener("mousemove", movePaddle);
  
  // Set the initial position of the ball and bricks
  ballElem.style.left = ball.x - ball.radius + "px";
  ballElem.style.top = ball.y - ball.radius + "px";
  for (var i = 0; i < bricks.length; i++) {
    bricks[i].style.left = (i % 10) * 60 + "px";
    bricks[i].style.top = (Math.floor(i / 10) * 30 + 30) + "px";
  }
  
  // Update the ball's position
  function moveBall() {
    // Update the position of the ball
    ball.x += ball.dx;
    ball.y += ball.dy;
  
    // Check for collision with the walls
    if (ball.x + ball.radius > 500 || ball.x - ball.radius < 0) {
      ball.dx = -ball.dx;
    }
    if (ball.y - ball.radius < 0) {
      ball.dy = -ball.dy;
    }
    
    // Check for collision with the paddle
    var paddle = document.getElementById("paddle");
    var paddleRect = paddle.getBoundingClientRect();
    var ballRect = ballElem.getBoundingClientRect();
    if (ballRect.bottom >= paddleRect.top && ballRect.left >= paddleRect.left && ballRect.right <= paddleRect.right) {
      ball.dy = -ball.dy;
    }
    
    // Check for collision with the bricks
    for (var i = 0; i < bricks.length; i++) {
      var brickRect = bricks[i].getBoundingClientRect();
      if (ballRect.right >= brickRect.left && ballRect.left <= brickRect.right
          && ballRect.bottom >= brickRect.top && ballRect.top <= brickRect.bottom) {
        // Remove the brick from the DOM
        bricks[i].parentNode.removeChild(bricks[i]);
        // Reverse the vertical direction of the ball
        ball.dy = -ball.dy;
        // Exit the loop (assuming only one brick can be hit at a time)
        break;
      }
    }
    
    // Update the position of the ball element on the page
    ballElem.style.left = ball.x - ball.radius + "px";
    ballElem.style.top = ball.y - ball.radius + "px";
  }
  
  // Move the paddle with the mouse
  function movePaddle(event) {
    var paddle = document.getElementById("paddle");
    var paddleRect = paddle.getBoundingClientRect();
    var x = event.clientX - paddleRect.width / 2;
    if (x < 0) {
      x = 0;
    }
    if (x > 100 - paddleRect.width) {
      x = 000 - paddleRect.width;
    }
    paddle.style.left = x + "px";
  }
  
  // Update the ball's position every 10 milliseconds
  setInterval(moveBall, 10); 
  