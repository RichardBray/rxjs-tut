import Rx from 'rxjs/Rx';

const DOM = document.documentElement;
const PRINT_HERE = document.querySelector('.print-here');

let animationFrame$ = Rx.Observable.interval(0, Rx.Scheduler.animationFrame);

let mouseMove$ = Rx.Observable.fromEvent(DOM, 'mousemove').map(event => ({
  x: event.clientX,
  y: event.clientY
}));

let smoothMove$ = animationFrame$
  .withLatestFrom(mouseMove$, (frame, move) => move)
  .scan((current, next) => lerp(current, next));

function lerp(start, end) {
  // linerar interpolation
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const rate = 0.05;

  return {
    x: start.x + dx * rate,
    y: start.y + dy * rate
  };
}

smoothMove$.subscribe(pos => {
  let rotX = pos.y / PRINT_HERE.clientHeight * -50 + 25;
  let rotY = pos.x / PRINT_HERE.clientWidth * 50 - 25;
  PRINT_HERE.style.cssText = `transform: rotateX(${rotX}deg) rotateY(${rotY}deg)`;
});
