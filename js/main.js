$( document ).ready(function() {
  $( 'article#work section' ).mouseenter(function() {
    $( "p", this ).slideDown();
  }).mouseleave(function() {
    $( "p", this ).slideUp();
  });
});