import { createReducer, on } from '@ngrx/store';
import { increment } from './counter.actions';

export interface CounterState {
  value: number;
}

const initialState: CounterState = { value: 0 };

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({
    value: state.value + 1,
  })),
);
