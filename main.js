
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
    car.direction = 'left';
  } else if (event.key === 'ArrowRight') {
    image.className = 'right';
    car.direction = 'right';
  } else if (event.key === 'ArrowUp') {
    image.className = 'up';
    car.direction = 'up';
  } else if (event.key === 'ArrowDown') {
    image.className = 'down';
    car.direction = 'down';
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
  if (car.direction === 'right') {
    var currentX = parseInt(image.style.left);
    car.location.x = currentX;
    car.location.x += 5;
    image.style.left = car.location.x + 'px';
  } else if (car.direction === 'left') {
    var currentX2 = parseInt(image.style.left);
    car.location.x = currentX2;
    car.location.x = car.location.x - 5;
    image.style.left = car.location.x + 'px';
  } else if (car.direction === 'down') {
    var currentY = parseInt(image.style.top);
    car.location.y = currentY;
    car.location.y += 5;
    image.style.top = car.location.y + 'px';
  } else if (car.direction === 'up') {
    var currentY2 = parseInt(image.style.top);
    car.location.y = currentY2;
    car.location.y = car.location.y - 5;
    image.style.top = car.location.y + 'px';
  }
}

window.addEventListener('keydown', moveCar);
