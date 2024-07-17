'use strict';

let secretNum = Math.trunc( Math.random() * 20 ) + 1;
let score = 20; 

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
            document.querySelector( 'body' ).style.backgroundColor = '#60b347'
            document.querySelector( '.number' ).style.width = '30rem'
            document.querySelector( ".number" ).textContent = secretNum;
        }
        
        // when player guess to high
        else if ( guess > secretNum ) {
            document.querySelector( '.message' ).textContent = "📈Too high!";
            score--;
            document.querySelector( '.score' ).textContent = score;
        }
        
        // when player guess to low
        else if ( guess < secretNum ) {
            document.querySelector( '.message' ).textContent = "📉 Too low!";
            score--;
            document.querySelector( '.score' ).textContent = score
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
        document.querySelector( '.guess' ).value = null;
    } );