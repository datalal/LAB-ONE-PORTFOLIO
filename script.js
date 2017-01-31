/* var $win = $(window),
    w = 0,h = 0,
    rgb = [],
    getWidth = function() {
        w = $win.width();
        h = $win.height();
    };

$win.resize(getWidth).mousemove(function(e) {

    rgb = [
        Math.round(e.pageX/w * 255),
        Math.round(e.pageY/h * 255),
        150


    ];

    $('#sidebar').css('background','rgb('+rgb.join(',')+')');
    $('#rightbox').css('background','rgb('+rgb.join(',')+')');

    if (pageX < 50) {
    $('#navlink').css("color", "white");
       } else
         {  $('#navlink').css("color", "black");
  }

}).resize(); */

$(document).mousemove(function(e){
    var $width = ($(document).width())/255;
    var $height = ($(document).height())/255;
    var $pageX = parseInt(e.pageX / $width,10);
    var $pageY = parseInt(e.pageY / $height,10);
    $(".sidebar").css("background-color", "rgb("+$pageX+","+$pageY+",150)");
    $(".rightbox").css("background-color", "rgba("+$pageX+","+$pageY+","+$pageX+", 0.3)");
    $(".rightbox2").css("background-color", "rgba("+$pageX+","+$pageY+",90, 0.5)");
    $(".rightbox3").css("background-color", "rgba("+$pageX+","+$pageY+",40, 0.7)");
    $(".rightbox4").css("background-color", "rgba("+$pageX+","+$pageY+",10, 0.8)");

    if ($pageX < 60 || $pageY < 70) {
  $(".navlink").css("color", "white");
  $(".navlink").css("background-color", "grey");

     } else
       {  $(".navlink").css("color", "black");
       $(".navlink").css("background-color", "transparent");

}

});
