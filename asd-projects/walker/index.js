/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  
  // Game Item Objects
  const KEY = {
    "UP": 38,
    "LEFT": 37,
    "RIGHT": 39,
    "DOWN": 40,
  }

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on("keydown", handleKeyDown);
  $(document).on("keyup", handleKeyUp);                           // change 'eventType' to the type of event you want to handle
  var positionX = 0;                                                  // the x-coordinate location for the walker
  var positionY = 0;                                                  // the y-coordinate location for the walker 
  var speedX = 0;                                                     // the speed for the walker along the x-axis 
  var speedY = 0;                                                     // the speed for the walker along the y-axis 

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem();
    redrawGameItem();
  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
      if (event.which === KEY.LEFT) {
        speedX = -5;
      } else if (event.which === KEY.UP) {
        speedY = -5;
      } else if (event.which === KEY.RIGHT) {
        speedX = 5;
      } else if (event.which === KEY.DOWN) {
        speedY = 5;
      }
  }

  function handleKeyUp(event) {
    if (event.which === KEY.LEFT) {
      speedX = 0;
    } else if (event.which === KEY.UP) {
      speedY = 0;
    } else if (event.which === KEY.RIGHT) {
      speedX = 0;
    } else if (event.which === KEY.DOWN) {
      speedY = 0;
    }
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
  function repositionGameItem() {
    // update the position of the walker along the x-axis 
    positionX += speedX;

    // update the position of the walker along the y-axis
    positionY += speedY;
  }

  function redrawGameItem() {
    // draw the walker in the new location, positionY pixels away from the "top" 
    $("#walker").css("top", positionY);

    // draw the walker in a new location, positionX pixels away from the "left"
    $("#walker").css("left", positionX);
  }
}
