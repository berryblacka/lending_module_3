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
const text__top_left = document.getElementById('text__top_left');
const text__top_right = document.getElementById('text__top_right');
const text__middle_middle = document.getElementById('text__middle_middle');
const text__middle_left = document.getElementById('text__middle_left');
const text__middle_right = document.getElementById('text__middle_right');
const text__bottom_middle = document.getElementById('text__bottom_middle');
const text__footer_left = document.getElementById('text__footer_left');
const text__footer_right = document.getElementById('text__footer_right');
const circle__size_big_1 = document.getElementById('circle__size_big_1');
const circle__size_big_2 = document.getElementById('circle__size_big_2');
const circle__size_medium_1 = document.getElementById('circle__size_medium_1');
const circle__size_medium_2 = document.getElementById('circle__size_medium_2');
const circle__size_medium_3 = document.getElementById('circle__size_medium_3');

// .....Функция для перетягивания......
const Dragger = (elem) => {
  elem.style.cursor = 'pointer';
  elem.onmousedown = (event) => {
    const shiftX = event.clientX - elem.getBoundingClientRect().left;
    const shiftY = event.clientY - elem.getBoundingClientRect().top;
    elem.style.position = 'absolute';
    elem.style.zIndex = 1000;
    document.body.append(elem);
    moveAt(event.pageX, event.pageY);
    function moveAt(pageX, pageY) {
      elem.style.left = `${pageX - shiftX}px`;
      elem.style.top = `${pageY - shiftY}px`;
    }
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
    document.addEventListener('mousemove', onMouseMove);
    elem.onmouseup = () => {
      document.removeEventListener('mousemove', onMouseMove);
      elem.onmouseup = null;
    };
  };

  elem.ondragstart = () => false;
};

// ..........функция для уменьшения прозрачности...............

function OpacityChanger(svgElement) {
  let opacity = 1;
  svgElement.style.transition = 'opacity 1s';
  svgElement.style.cursor = 'pointer';
  svgElement.addEventListener('click', () => {
    opacity *= 0.6;
    svgElement.style.opacity = `${opacity}`;
    if (opacity < 0.1) {
      svgElement.style.display = 'none';
    }
  });
}

// ..........функция для уменьшения...............

function SizeSmaller(svgElement) {
  let scale = 1;
  svgElement.style.cursor = 'pointer';
  svgElement.style.transition = 'transform 1s';
  svgElement.addEventListener('click', () => {
    scale *= 0.6;
    svgElement.style.transform = `scale(${scale})`;
    if (scale < 0.1) {
      svgElement.style.display = 'none';
    }
  });
}

// ..........функция для исчезания...............

const Disappear = (elem) => {
  elem.style.cursor = 'pointer';
  elem.addEventListener('click', () => {
    elem.style.display = 'none';
  });
};

SizeSmaller(wave__position_top_left);
OpacityChanger(rainbow__position_bottom_right);
SizeSmaller(radial__position_top_right);
SizeSmaller(radial__position_middle_left);
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
Dragger(circle__size_big_1);
Dragger(circle__size_big_2);
Dragger(circle__size_medium_1);
Dragger(circle__size_medium_2);
Dragger(circle__size_medium_3);
Disappear(text__top_left);
Disappear(text__top_right);
Disappear(text__middle_middle);
Disappear(text__middle_left);
Disappear(text__middle_right);
Disappear(text__bottom_middle);
Disappear(text__footer_left);
Disappear(text__footer_right);
