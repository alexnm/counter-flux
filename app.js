var Dispatcher = require( "./dispatcher" );
var Store = require( "./store" );

var incrementButton = document.querySelector( "#increment" );
var decrementButton = document.querySelector( "#decrement" );

incrementButton.addEventListener( "click", () => {
    Dispatcher.dispatch( { type: "INCREMENT" } );
} );
decrementButton.addEventListener( "click", () => {
    Dispatcher.dispatch( { type: "DECREMENT" } );
} );

Store.addChangeListener( render );
render( );

function render( ) {
    document.querySelector( "#counter" ).innerHTML = Store.getCounter( );
}
