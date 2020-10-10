import { range, timer, interval } from "rxjs";

// const subscription = interval(500).subscribe(v => console.log(v));
//
// setTimeout(() => {
//     subscription.unsubscribe();
// }, 4000);

// timer(2500).subscribe(v => console.log(v));

range(42, 10).subscribe(v => console.log(v));