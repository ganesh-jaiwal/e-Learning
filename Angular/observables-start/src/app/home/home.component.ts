import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Observable, Observer, Subscription} from 'rxjs';
import 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  numberObsSubscription: Subscription;
  customObsSubscription: Subscription;
  constructor() { }

  ngOnInit() {
    const myNumber = interval(1000)
      .map(
        (data: number) => {
          return data * 2;
        }
      );
    this.numberObsSubscription = myNumber.subscribe(
      (number: number) => {
        console.log(number);
      }
    );
    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('First Package');
      }, 2000);
      setTimeout(() => {
        observer.next('Second Package');
      }, 4000);
      setTimeout(() => {
        observer.complete();
      }, 5000);
      setTimeout(() => {
        observer.next('Last Package');
      }, 6000);
      // setTimeout(() => {
      //   observer.error('This does not work!!!!!');
      // }, 5000);
    });
    this.customObsSubscription = myObservable.subscribe(
      (data: string) => {
        console.log(data);
      },
      (error: string) => {
        console.log(error);
      },
      () => {
        console.log('Completed');
      }
    );
  }
  ngOnDestroy() {
    this.numberObsSubscription.unsubscribe();
    this.customObsSubscription.unsubscribe();
  }
}
