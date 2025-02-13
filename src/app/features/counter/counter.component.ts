import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../app.config';
import { decrement, increment, reset } from '../../core/store/counter.actions';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export default class CounterComponent {
  store = inject(Store);
  counter = this.store.selectSignal((state: AppState) => state.counter.value);

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
