$(document).ready(function () {
  //** notice we are including jquery and the color plugin at
  //** http://code.jquery.com/color/jquery.color-2.1.0.js

  //** adapted from http://jsfiddle.net/cgspicer/V4qh9/

  var scroll_pos = 0;
  /*     var animation_pos_1a = 300; //where you want the animation to begin
    var animation_pos_1b = 1000; //where you want the animation to stop
    var animation_pos_2a = 1500; //animation 2 start
    var animation_pos_2b = 2500; //animation 2 end */

  var ch1_pos = $('.ch1_flex').position().top;
  var ch1_h = $('ch1_flex').height();
  var pos = [
    ch1_pos,
    ch1_pos + ch1_h / 6,
    ch1_pos + ch1_h / 3,
    ch1_pos + ch1_h / 2,
  ];

  var color_1 = new $.Color('rgb(0,35,0)'); //we can set this here, but it'd probably be better to get it from the CSS; for the example we're setting it here.
  var color_2 = new $.Color('rgb(34,0,0)');
  var color_3 = new $.Color('rgb(35,34,100)');
  var color_4 = new $.Color('rgb(238,171,161)');

  var colors = [color_1, color_2, color_3, color_4];

  $('.page').scroll(function () {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos < pos[0]) {
      $('body').animate({ backgroundColor: color_1 }, 0);
    } else if (scroll_pos >= pos[0] && scroll_pos <= pos[1]) {
      //we want to calculate the relevant transitional rgb value
      var percentScrolled = (scroll_pos - pos[0]) / (pos[1] - pos[0]);
      var newRed =
        color_1.red() + (color_2.red() - color_1.red()) * percentScrolled;
      var newGreen =
        color_1.green() + (color_2.green() - color_1.green()) * percentScrolled;
      var newBlue =
        color_1.blue() + (color_2.blue() - color_1.blue()) * percentScrolled;
      var newColor1 = new $.Color(newRed, newGreen, newBlue);
      //console.log( newColor.red(), newColor.green(), newColor.blue() );
      $('body').animate({ backgroundColor: newColor1 }, 0);
    } else if (scroll_pos > pos[1] && scroll_pos < pos[2]) {
      var percentScrolled = (scroll_pos - pos[1]) / (pos[2] - pos[1]);
      $('body').animate({ backgroundColor: color_2 }, 0);
      $('.ch1_img.nola').css({
        opacity: percentScrolled,
      });
    } else if (scroll_pos >= pos[2] && scroll_pos <= pos[3]) {
      var percentScrolled = (scroll_pos - pos[2]) / (pos[3] - pos[2]);
      var newRed =
        color_2.red() + (color_3.red() - color_2.red()) * percentScrolled;
      var newGreen =
        color_2.green() + (color_3.green() - color_2.green()) * percentScrolled;
      var newBlue =
        color_2.blue() + (color_3.blue() - color_2.blue()) * percentScrolled;
      var newColor2 = new $.Color(newRed, newGreen, newBlue);
      $('body').animate({ backgroundColor: newColor2 }, 0);
    } else if (scroll_pos > animation_pos_2b) {
      $('body').animate({ backgroundColor: color_3 }, 0);
    } else {
    }
  });
});
