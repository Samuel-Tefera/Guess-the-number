'use strict';

let secretNum = Math.trunc( Math.random() * 20 ) + 1;
let score = 20; 
let highScore = 0;

document.querySelector( '.check' ).addEventListener( 'click',
    function () {
        const guess = Number( document.querySelector( '.guess' ).value );
        
        // when there is no input
        if ( !guess ) {
            document.querySelector( '.message' ).textContent = "⛔ No Number";
        }

        // when player wins
        else if ( guess === secretNum ) {
            document.querySelector( '.message' ).textContent = "🎉Correct Number";
            document.querySelector( 'body' ).style.backgroundColor = '#60b347';
            document.querySelector( '.number' ).style.width = '30rem';
            document.querySelector( ".number" ).textContent = secretNum;
            if ( score > highScore ) {
                highScore = score;
                document.querySelector( '.highscore' ).textContent = highScore;
            }
        }
        
        // when player guess wrong
        else if ( guess !== secretNum ) {
            if ( score > 1 ) {
                document.querySelector( '.message' ).textContent =
                    guess > secretNum ? "📈 Too high!" : "📉 Too Low!";
                score--;
                document.querySelector( '.score' ).textContent = score;
            }
            else {
                document.querySelector( '.message' ).textContent =
                    "💥 You los the game!";
                document.querySelector( '.score' ).textContent = 0;
            }
        }
        
    } );

document.querySelector( '.again' ).addEventListener( 'click',
    function () {
        secretNum = Math.trunc( Math.random() * 20 ) + 1;
        score = 20;
        document.querySelector( '.score' ).textContent = score;
        document.querySelector( ".number" ).textContent = '?';
        document.querySelector( '.message' ).textContent = "Start guessing...";
        document.querySelector( 'body' ).style.backgroundColor = '#222222';
        document.querySelector( '.number' ).style.width = '15rem';
        document.querySelector( '.guess' ).value = null;
    } );