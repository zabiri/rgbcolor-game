var numSquares = 6;
var colors = [ ];
var pickedColor;

var squares = document.querySelectorAll( ".square" );
var colorDisplay = document.getElementById( "colorDisplay" );
var messageDisplay = document.getElementById( "message" );
var h1 = document.querySelector( "h1" );
var resetButton = document.getElementById( "reset" );
var modeButtons = document.querySelectorAll( ".mode" );

init( );

function init( ) {
     setupModeButtons( );
     setupSquares( );
     reset( );
}
function setupModeButtons( ) {
     for ( var i = 0; i < modeButtons.length; i++ ) {
          modeButtons[i].addEventListener( "click", function ( ) {
               modeButtons[0].classList.remove( "selected" );
               modeButtons[1].classList.remove( "selected" );
               this.classList.add( "selected" );
               this.textContent === "Easy"
                    ? numSquares = 3
                    : numSquares = 6;
               reset( );
          });
     }
}
function setupSquares( ) {
     for ( var i = 0; i < squares.length; i++ ) {
          squares[i].addEventListener( "click", function ( ) {
               var clickedColor = this.style.backgroundColor;
               if ( clickedColor === pickedColor ) {
                    changeColors( clickedColor );
                    h1.style.backgroundColor = pickedColor;
                    messageDisplay.textContent = "Correct!";
                    resetButton.textContent = "Play Again?";
               } else {
                    this.style.background = "#232323"
                    messageDisplay.textContent = "Try Again"
               }
          });
     }
}
function reset( ) {
     colors = generateRandomColors( numSquares );
     pickedColor = pickColor( );
     colorDisplay.textContent = pickedColor;
     h1.style.backgroundColor = "steelblue";
     messageDisplay.textContent = "";
     for ( i = 0; i < squares.length; i++ ) {
          colors[i]
               ? (squares[i].style.display = "block", squares[i].style.backgroundColor = colors[i])
               : squares[i].style.display = "none";
     }
     resetButton.textContent = "New Colors";

}

resetButton.addEventListener( "click", reset );

function changeColors( color ) {
     for ( i = 0; i < squares.length; i++ ) {
          squares[i].style.backgroundColor = color;
     }
}

function pickColor( ) {
     var random = Math.floor( Math.random( ) * colors.length );
     return colors[random]
}

function generateRandomColors( num ) {
     var arr = [ ];
     for ( var i = 0; i < num; i++ ) {
          arr.push(randomColor( ));
     }
     return arr;
}

function randomColor( ) {
     var r = Math.floor( Math.random( ) * 256 );
     var g = Math.floor( Math.random( ) * 256 );
     var b = Math.floor( Math.random( ) * 256 );
     return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
