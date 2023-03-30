/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
const wave__position_top_left = document.getElementById('wave__position_top_left');
const rainbow__position_bottom_right = document.getElementById('rainbow__position_bottom_right');
const radial__position_top_right = document.getElementById('radial__position_top_right');
const radial__position_middle_left = document.getElementById('radial__position_middle_left');
const gradient__position_top_middle = document.getElementById('gradient__position_top_middle');
const corals__position_top_left = document.getElementById('corals__position_top_left');
const radial__position_bottom_left = document.getElementById('radial__position_bottom_left');
const moon = document.getElementById('moon');
const rainbow__position_middle_middle = document.getElementById('rainbow__position_middle_middle');
const gradient__position_bottom_right = document.getElementById('gradient__position_bottom_right');
const rainbow__position_bottom_middle = document.getElementById('rainbow__position_bottom_middle');
const corals__position_middle_right = document.getElementById('corals__position_middle_right');
const white_lines_top = document.getElementById('white_lines_top');
const white_lines_bottom = document.getElementById('white_lines_bottom');
const corals__position_bottom_right = document.getElementById('corals__position_bottom_right');
const circle__size_small_1 = document.getElementById('circle__size_small_1');
const circle__size_small_2 = document.getElementById('circle__size_small_2');
const circle__size_small_3 = document.getElementById('circle__size_small_3');

// .....Функция для перетягивания......
const Dragger = (elem) => {
  elem.style.cursor = 'pointer';
  elem.onmousedown = function (event) {
    const shiftX = event.clientX - elem.getBoundingClientRect().left;
    const shiftY = event.clientY - elem.getBoundingClientRect().top;
    elem.style.position = 'absolute';
    elem.style.zIndex = 1000;
    document.body.append(elem);
    // eslint-disable-next-line no-use-before-define
    moveAt(event.pageX, event.pageY);
    function moveAt(pageX, pageY) {
      elem.style.left = `${pageX - shiftX}px`;
      elem.style.top = `${pageY - shiftY}px`;
    }
    // eslint-disable-next-line no-shadow
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
    document.addEventListener('mousemove', onMouseMove);
    elem.onmouseup = function () {
      document.removeEventListener('mousemove', onMouseMove);
      elem.onmouseup = null;
    };
  };

  elem.ondragstart = function () {
    return false;
  };
};

// ..........функция для уменьшения прозрачности...............

function OpacityChanger(svgElement) {
  let opacity = 1;
  svgElement.style.cursor = 'pointer';
  svgElement.addEventListener('click', () => {
    opacity *= 0.6;
    // eslint-disable-next-line no-param-reassign
    svgElement.style.opacity = `${opacity}`;
    if (opacity < 0.1) {
      // eslint-disable-next-line no-param-reassign
      svgElement.style.display = 'none';
    }
  });
}

// ..........функция для уменьшения...............

function SizeSmaller(svgElement) {
  let scale = 1;
  svgElement.style.cursor = 'pointer';
  svgElement.addEventListener('click', () => {
    scale *= 0.6;
    // eslint-disable-next-line no-param-reassign
    svgElement.style.transform = `scale(${scale})`;
    if (scale < 0.1) {
      // eslint-disable-next-line no-param-reassign
      svgElement.style.display = 'none';
    }
  });
}

SizeSmaller(wave__position_top_left);
OpacityChanger(rainbow__position_bottom_right);
SizeSmaller(radial__position_top_right);
Dragger(radial__position_middle_left);
Dragger(gradient__position_top_middle);
OpacityChanger(corals__position_top_left);
SizeSmaller(radial__position_bottom_left);
SizeSmaller(gradient__position_bottom_right);
OpacityChanger(corals__position_bottom_right);
OpacityChanger(moon);
OpacityChanger(corals__position_middle_right);
OpacityChanger(white_lines_top);
OpacityChanger(white_lines_bottom);
OpacityChanger(rainbow__position_middle_middle);
Dragger(rainbow__position_bottom_middle);
Dragger(circle__size_small_1);
Dragger(circle__size_small_2);
Dragger(circle__size_small_3);
