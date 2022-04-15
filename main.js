
var image = document.querySelector('.right');
var car = {
  direction: 'right',
  location: {
    x: null,
    y: null
  }
};

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
  if (event.key === ' ') {
    setInterval(forward, 16);
  }
}

function forward(event) {
  var currentX = parseInt(image.style.left);
  car.location.x = currentX;
  car.location.x++;
  image.style.left = car.location.x + 'px';
}

window.addEventListener('keydown', turnCar);
