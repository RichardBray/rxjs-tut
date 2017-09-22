import Rx from 'rxjs/Rx';

const DOM = document.documentElement;
const PRINT_HERE = document.querySelector('.print-here');

let mouseMove$ = Rx.Observable.fromEvent(DOM, 'mousemove').map(event => ({
  x: event.clientX,
  y: event.clientY
}));

mouseMove$.subscribe(pos => {
  let rotX = (pos.y / PRINT_HERE.clientHeight * -50) + 25;
  let rotY = (pos.x / PRINT_HERE.clientWidth * 50) - 25;
  PRINT_HERE.style.cssText = `transform: rotateX(${rotX}deg) rotateY(${rotY}deg)`;
});
