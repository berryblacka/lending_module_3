$(document).ready(() => {
  // ..........функция для уменьшения прозрачности...............

  function OpacityChanger(svgElement) {
    let opacity = 1;
    $(svgElement).css('transition', 'opacity 1s');
    $(svgElement).css('cursor', 'pointer');
    $(svgElement).on('click', () => {
      opacity *= 0.6;
      $(svgElement).css('opacity', opacity);
      if (opacity < 0.1) {
        $(svgElement).hide();
      }
    });
  }

  // ..........функция для уменьшения...............

  function SizeSmaller(svgElement) {
    let scale = 1;
    $(svgElement).css('cursor', 'pointer');
    $(svgElement).css('transition', 'transform 1s');
    $(svgElement).on('click', () => {
      scale *= 0.6;
      $(svgElement).css('transform', `scale(${scale})`);
      if (scale < 0.1) {
        $(svgElement).hide();
      }
    });
  }


  // ..........функция для исчезания...............

  const Disappear = (elem) => {
    $(elem).css('cursor', 'pointer');
    $(elem).on('click', () => {
      $(elem).hide();
    });
  };


  $("#gradient__position_top_middle, #rainbow__position_bottom_middle, #circle__size_small_1, #circle__size_small_2, #circle__size_small_3, #circle__size_big_1, #circle__size_big_2, #circle__size_medium_1, #circle__size_medium_2, #circle__size_medium_3, #rock_1, #rock_2, #rock_3, #rock_4" ).draggable();
  $("#gradient__position_top_middle, #rainbow__position_bottom_middle, #circle__size_small_1, #circle__size_small_2, #circle__size_small_3, #circle__size_big_1, #circle__size_big_2, #circle__size_medium_1, #circle__size_medium_2, #circle__size_medium_3, #rock_1, #rock_2, #rock_3, #rock_4").css('cursor', 'pointer');

  SizeSmaller($("#wave__position_top_left"));
  OpacityChanger($("#rainbow__position_bottom_right"));
  SizeSmaller($("#radial__position_top_right"));
  SizeSmaller($("#radial__position_middle_left"));
  OpacityChanger($("#corals__position_top_left"));
  SizeSmaller($("#radial__position_bottom_left"));
  SizeSmaller($("#gradient__position_bottom_right"));
  OpacityChanger($("#corals__position_bottom_right"));
  OpacityChanger($("#moon"));
  OpacityChanger($("#corals__position_middle_right"));
  OpacityChanger($("#white_lines_top"));
  OpacityChanger($("#white_lines_bottom"));
  OpacityChanger($("#rainbow__position_middle_middle"));
  Disappear($("#text__top_left"));
  Disappear($("#text__top_right"));
  Disappear($("#text__middle_middle"));
  Disappear($("#text__middle_left"));
  Disappear($("#text__middle_right"));
  Disappear($("#text__bottom_middle"));


});

