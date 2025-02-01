import { createReducer } from '@ngrx/store';

export interface CounterState {
  value: number;
}

const initialState: CounterState = { value: 0 };

export const counterReducer = createReducer(initialState);
