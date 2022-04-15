
var image = document.querySelector('.right');

function turnCar(event) {
  if (event.key === 'ArrowLeft') {
    image.className = 'left';
  } else if (event.key === 'ArrowRight') {
    image.className = 'right';
  } else if (event.key === 'ArrowUp') {
    image.className = 'up';
  } else if (event.key === 'ArrowDown') {
    image.className = 'down';
  }
}

window.addEventListener('keydown', turnCar);
