/* eslint-disable no-undef */
$elem1 = $('.wave__position_top_left');
// const elem3 = document.getElementById('elem3');
// const elem4 = document.getElementById('elem4');

elem1.onmousedown = function (event) {
  const shiftX = event.clientX - elem1.getBoundingClientRect().left;
  const shiftY = event.clientY - elem1.getBoundingClientRect().top;

  elem1.style.position = 'absolute';
  elem1.style.zIndex = 1000;
  document.body.append(elem1);

  // eslint-disable-next-line no-use-before-define
  moveAt(event.pageX, event.pageY);

  // переносит мяч на координаты (pageX, pageY),
  // дополнительно учитывая изначальный сдвиг относительно указателя мыши
  function moveAt(pageX, pageY) {
    elem1.style.left = `${pageX - shiftX}px`;
    elem1.style.top = `${pageY - shiftY}px`;
  }

  // eslint-disable-next-line no-shadow
  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // передвигаем мяч при событии mousemove
  document.addEventListener('mousemove', onMouseMove);

  // отпустить мяч, удалить ненужные обработчики
  elem1.onmouseup = function () {
    document.removeEventListener('mousemove', onMouseMove);
    elem1.onmouseup = null;
  };
};

elem1.ondragstart = function () {
  return false;
};

let opacity = 100;

$('.rainbow__position_bottom_right').click(() => {
  opacity -= 10;
  if (opacity > 0) {
    elem2.style.opacity = `${opacity}%`;
  } else {
    elem2.style.display = 'none';
  }
});

$('.radial__position_top_right').click(function () {
  $(this).slideUp(3000);
});

$('.radial__position_middle_left').click(() => {
  $(this).style.transform = 'rotateX(180deg) rotateY(180deg)';
});
