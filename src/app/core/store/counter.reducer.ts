import { createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from './counter.actions';

export interface CounterState {
  value: number;
  anotherValue: string;
}

const initialState: CounterState = { value: 0, anotherValue: 'initial' };

export const counterReducer = createReducer(
  initialState,
  on(
    increment,
    (state): CounterState => ({
      ...state,
      value: state.value + 1,
    }),
  ),
  on(
    decrement,
    (state, action): CounterState => ({
      ...state,
      value: state.value - action.value,
    }),
  ),
  on(reset, (state): CounterState => ({ ...state, value: 0 })),
);
