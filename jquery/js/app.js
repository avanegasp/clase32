$(document).ready(function(){
  colors = ["green","blue","gray", "yellow", "purple", "pink", "black"];
    setInterval(function(){
      var rand = colors[Math.floor(Math.random() * colors.length)];
      $('body').css('background-color', rand)
    }, 3000)
})


SEGUNDO EJERCICIO
crear 4 cuadrados y colocarles un color diferente desde js

Así se puede crear desde js
for (var i=0; i < 4; i++) {
  $('body').append('<div class="square"></div>');
}

$(document).ready(function(){
  $('.uno').css('background-color', 'yellow')
  $('.dos').css('background-color', 'purple')
  $('.tres').css('background-color', 'pink')
  $('.cuatro').css('background-color', 'black')
})


TERCER EJERCICIO
colocar otra clase que se llame par e impar y cambiar el color según la clase


$(document).ready(function(){
  $('.par').css('background-color', 'red')
  $('.impar').css('background-color', 'green')
})
