$(document).ready(function () {
  //** notice we are including jquery and the color plugin at
  //** http://code.jquery.com/color/jquery.color-2.1.0.js

  //** adapted from http://jsfiddle.net/cgspicer/V4qh9/

  /*     var animation_pos_1a = 300; //where you want the animation to begin
    var animation_pos_1b = 1000; //where you want the animation to stop
    var animation_pos_2a = 1500; //animation 2 start
    var animation_pos_2b = 2500; //animation 2 end */

  //initializing vars:
  var darkGreen = new $.Color($('body').css('background-color'));
  var maroon = new $.Color('rgb(34,0,0)');
  var darkBlue = new $.Color('rgb(35,34,100)');
  var pink = new $.Color('rgb(238,171,161)');
  var black = new $.Color('rgb(0,0,0)');
  var white = new $.Color('rgb(255,255,255)');
  var deepBlue = new $.Color('rgb(0,70,150)');
  var darkGray = new $.Color('rgb(35,31,32)');
  var lightBlue = new $.Color('rgb(223,242,247)');
  var darkTeal = new $.Color('rgb(0,34,43)');

  var rust = new $.Color($('.ch3_colors_a2').css('background-color'));
  var brown = new $.Color($('.ch3_colors_b1').css('background-color'));
  var paleGreen = new $.Color($('.ch3_colors_b2').css('background-color'));

  var darkerBlue = new $.Color('rgb(38,44,42)');
  var grayBlue = new $.Color('rgb(82,106,126)');
  var beige = new $.Color('rgb(220,223,210)');
  var olive = new $.Color('rgb(107,129,55)');

  var colors = [
    darkGreen,
    maroon,
    darkBlue,
    pink,
    black,
    darkGreen,
    deepBlue,
    darkGray,
    lightBlue,
    darkTeal,
  ];

  var lineColors = [
    maroon,
    darkBlue,
    pink,
    new $.Color('rgb(181,201,212)'),
    white,
    darkGreen,
    grayBlue,
    new $.Color('rgb(0,82,0)'),
    new $.Color('rgb(76,77,63)'),
    new $.Color('rgb(64,104,166)'),
    new $.Color('rgb(253,190,187)'),
    new $.Color('rgb(90,0,0)'),
    new $.Color('rgb(223,242,247)'),
    new $.Color('rgb(89,61,163)'),
    new $.Color('rgb(157,183,112)'),
    new $.Color('rgb(0,73,93)'),
  ];

  var leftbound_pos_index = 0;
  var ch3_scroll = 0;
  var ch7_scroll = 0;

  for (let index = 0; index < lineColors.length; index++) {
    var newline = document.createElement('div');
    $(newline)
      .addClass('line')
      .css({
        'animation-delay': index / 6 + 's',
        transform:
          'translateX(50px), rotate(23deg), translateY(' + index * 20 + 'px)',
        'background-color': lineColors[index],
      });
    $('#line-container').append(newline);
  }

  function scrollLinkedEffects() {
    var scroll_pos = $('.page').scrollTop();

    var ch1_pos = $('.ch1_flex').position().top;
    var ch1_h = $('.ch1_flex').height();
    var kira_pos = ch1_pos + $('.ch1_img.kira').position().top;
    var ch2_pos =
      $('.white_sands_text').position().top + $('body').height() / 3;
    var ch2_h =
      $('.white_sands_text').height() * 2 + $('.white_sands_bg').height();
    var ch4_pos = $('.ch4_flex').position().top;
    var ch4_h = $('.ch4_flex').height();
    var ch3_middle =
      $('.ch3_flex').position().top + ($('.ch3_flex').height() * 3) / 8;
    var ch5a_pos = $('.ch5a').position().top;
    var ch5a_end = ch5a_pos + $('.ch5a').height();
    var ch5b_end = $('.ch5b_imgs.third').position().top;
    var ch6_start = $('.ch6_container').position().top;
    var ch6_middle = ch6_start + $('.ch6_container').height() * 0.5;
    var ch7_start = $('.ch7_container').position().top;
    var ch7_end =
      ch7_start + $('.ch7_container').height() - $('body').height() * 1.5;
    var ch8_start = $('.ch8_flex').position().top - $('body').height();

    // console.log(ch2_pos);

    var pos = [
      $('.page').position().top,
      ch1_pos,
      ch1_pos + $('.ch1_img.nola').position().top,
      ch1_pos + $('.ch1_img.nola').position().top + $('.ch1_img.nola').height(),
      ch1_pos + $('.ch1_img.moved').position().top,
      ch1_pos +
        $('.ch1_img.moved').position().top +
        $('.ch1_img.moved').height(),
      kira_pos,
      ch1_pos + ch1_h,
      ch2_pos,
      ch4_pos - ch4_h,
      ch4_pos,
      ch5a_pos,
      ch5a_end,
      ch5b_end,
      ch6_start,
      ch6_middle,
      ch7_start,
      ch7_end,
      ch8_start,
    ];

    while (pos[leftbound_pos_index + 1] <= 0) {
      leftbound_pos_index++;
      console.log('downscroll');
    }

    while (pos[leftbound_pos_index] > 0) {
      leftbound_pos_index--;
      console.log('upscroll');
    }

    if (leftbound_pos_index % 2 == 0) {
      $('body, .white_sands_text.first, .kira_img').animate(
        { backgroundColor: colors[leftbound_pos_index / 2] },
        0
      );
      // $('.ch1_img.kira').animate({backgroundColor: colors[leftbound_pos_index/2]}, 0);
    } else {
      var percentScrolled =
        (0 - pos[leftbound_pos_index]) /
        (pos[leftbound_pos_index + 1] - pos[leftbound_pos_index]);
      var startColor = parseInt((leftbound_pos_index - 1) / 2);
      var endColor = parseInt((leftbound_pos_index + 1) / 2);
      //console.log(startColor);
      //console.log(endColor);
      var newRed =
        colors[startColor].red() +
        (colors[endColor].red() - colors[startColor].red()) * percentScrolled;
      var newGreen =
        colors[startColor].green() +
        (colors[endColor].green() - colors[startColor].green()) *
          percentScrolled;
      var newBlue =
        colors[startColor].blue() +
        (colors[endColor].blue() - colors[startColor].blue()) * percentScrolled;
      var newColor = new $.Color(newRed, newGreen, newBlue);
      //console.log( newColor.red(), newColor.green(), newColor.blue() );
      $('body, .white_sands_text.first, .kira_img').animate(
        { backgroundColor: newColor },
        0
      );
      // $('.ch1_img.kira').animate({backgroundColor: newColor}, 0);
    }

    if (ch3_middle <= 0 && ch3_scroll == 0) {
      ch3_scroll = 1;
      $('.ch3_colors_a1').transition(
        {
          width: '25vw',
          height: '40vh',
          backgroundColor: darkerBlue,
        },
        'slow'
      );
      $('.ch3_colors_a2').transition(
        {
          width: '75vw',
          height: '40vh',
          backgroundColor: grayBlue,
        },
        'slow'
      );
      $('.ch3_colors_b1').transition(
        {
          width: '25vw',
          height: '60vh',
          backgroundColor: beige,
        },
        'slow'
      );
      $('.ch3_colors_b2').transition(
        {
          width: '75vw',
          height: '60vh',
          backgroundColor: olive,
        },
        'slow'
      );
    } else if (ch3_middle > 0 && ch3_scroll == 1) {
      ch3_scroll = 0;
      $('.ch3_colors_a1').transition(
        {
          width: '33vw',
          height: '80vh',
          backgroundColor: darkGreen,
        },
        'slow'
      );
      $('.ch3_colors_a2').transition(
        {
          width: '67vw',
          height: '80vh',
          backgroundColor: rust,
        },
        'slow'
      );
      $('.ch3_colors_b1').transition(
        {
          width: '33vw',
          height: '20vh',
          backgroundColor: brown,
        },
        'slow'
      );
      $('.ch3_colors_b2').transition(
        {
          width: '67vw',
          height: '20vh',
          backgroundColor: paleGreen,
        },
        'slow'
      );
    } else {
    }

    // console.log(ch7_start + $('.ch7_container').height()/2);

    if (
      ch7_start + $('.ch7_container').height() / 4 < 0 &&
      ch7_end > 0 &&
      ch7_scroll == 0
    ) {
      ch7_scroll = 1;
      // console.log("moving left box...");
      $('.ch7_text').css('visibility', 'visible');
      $('.ch7_text.left').transition(
        {
          marginTop: '25vh',
        },
        'slow'
      );
      $('.ch7_text.right').transition(
        {
          marginTop: '-25vh',
        },
        'slow'
      );
    } else if (
      (ch7_start + $('.ch7_container').height() / 4 >= 0 || ch7_end < 0) &&
      ch7_scroll == 1
    ) {
      // console.log("moving back...");
      ch7_scroll = 0;
      $('.ch7_text.left').transition(
        {
          marginTop: '125vh',
        },
        'slow'
      );
      $('.ch7_text.right').transition(
        {
          marginTop: '-125vh',
        },
        'slow' /* , function() {
                $('.ch7_text').css("visibility", "hidden");
            } */
      );
    }
  }

  $(window).on('load', function () {
    $('#loading').hide();
  });

  $('.page').scroll(scrollLinkedEffects);
  $(window).resize(scrollLinkedEffects);

  // function to scroll to playlist section when using QR code from print book
  function scrollFortySeven() {
    $('.page').animate(
      {
        scrollTop: $('.flowers_flex').offset().top,
      },
      'fast'
    );
  }

  var url_string = window.location.href;
  var url = new URL(url_string);
  var pl_scroll = url.searchParams.get('playlist_scroll');
  console.log('playlist scroll=', pl_scroll);
  if (pl_scroll == 1) {
    scrollFortySeven();
  }
});
