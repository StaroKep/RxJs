import {of, from, Observable, fromEvent, pipe} from 'rxjs';
import {map, scan} from "rxjs/operators";

// const stream$ = of({name: 'Kirill'}, [1, 2, 3]);
//
// stream$.subscribe(value => {
//     console.log(value);
// })

// const arr$ = from([1, 2, 3, 4])
//     .pipe(
//         scan((acc, v) => acc.concat(v), []),
//     )
//
// arr$.subscribe(val => console.log(val));

// const stream$ = new Observable(observer => {
//
//    observer.next('First value');
//
//    setTimeout(() => observer.next('After 1000ms'), 1000);
//
//    setTimeout(() => observer.complete(), 1500);
//
//    // setTimeout(() => observer.error('Something went wrong'), 2000);
//
//    setTimeout(() => observer.next('After  3000ms'), 3000);
//
// })

// stream$.subscribe(
//     value => console.log('Value:', value),
//     (err) => console.log(err),
//     () => console.log('Complete')
// );

// stream$.subscribe({
//    next: (val) => console.log(val),
//    error: (err) => console.log(err),
//    complete: () => console.log('Complete')
// })

// fromEvent(document.querySelector('canvas'), 'mousemove')
//     .pipe(
//         map(event => ({
//             x: event.offsetX,
//             y: event.offsetY,
//             ctx: event.target.getContext('2d'),
//         }))
//     )
//     .subscribe(pos => {
//         pos.ctx.fillRect(pos.x, pos.y, 2, 2)
//     })
//
// const clear$ = fromEvent(document.getElementById('clear'), 'click')
// clear$.subscribe(() => {
//     const canvas = document.querySelector('canvas');
//     canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
// })

