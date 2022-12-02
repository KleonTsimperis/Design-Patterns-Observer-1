import { Subject } from 'rxjs';

const news = new Subject();

const tv1 = news.subscribe((v) => console.log(v + ' is 1'));
const tv2 = news.subscribe((v) => console.log(v + ' is 2'));

news.next(111);
console.log('tv1', tv1.unsubscribe());
console.log('tv2', tv2);
