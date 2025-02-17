import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  decrement,
  increment,
  reset,
} from '../../core/store/counter/counter.actions';
import { selectValue } from '../../core/store/counter/counter.feature';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export default class CounterComponent {
  store = inject(Store);
  //counter = this.store.selectSignal(selectCounterValue);
  counter = this.store.selectSignal(selectValue);

  inc() {
    this.store.dispatch(increment());
  }

  dec() {
    this.store.dispatch(decrement({ value: 2 }));
  }

  resetToZero() {
    this.store.dispatch(reset());
  }
}
