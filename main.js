
var image = document.querySelector('.right');
var car = {
  direction: 'right',
  location: {
    x: null,
    y: null
  },
  status: 'stop',
  id: null
};

function moveCar(event) {
  if (event.key === 'ArrowLeft') {
    image.className = 'left';
  } else if (event.key === 'ArrowRight') {
    image.className = 'right';
  } else if (event.key === 'ArrowUp') {
    image.className = 'up';
  } else if (event.key === 'ArrowDown') {
    image.className = 'down';
  }
  if (event.key === ' ') {
    if (car.status === 'stop') {
      car.id = setInterval(forward, 16);
      car.status = 'start';
    } else if (car.status === 'start') {
      car.status = 'stop';
      clearInterval(car.id);
    }
  }
}

function forward(event) {
  var currentX = parseInt(image.style.left);
  car.location.x = currentX;
  car.location.x += 5;
  image.style.left = car.location.x + 'px';
}

window.addEventListener('keydown', moveCar);
