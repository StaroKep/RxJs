import { Subject, BehaviorSubject, ReplaySubject } from 'rxjs';

document.addEventListener('click', () => {

    const stream$ = new ReplaySubject(2);

    stream$.next('Hello');
    stream$.next(',');
    stream$.next('world');
    stream$.next('!');

    stream$.subscribe(v => console.log('value', v));

});