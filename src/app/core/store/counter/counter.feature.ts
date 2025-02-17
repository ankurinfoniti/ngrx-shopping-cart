import { createFeature, createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from './counter.actions';

export interface CounterState {
  value: number;
}

const initialState: CounterState = { value: 0 };

export const counterFeature = createFeature({
  name: 'counter',
  reducer: createReducer(
    initialState,
    on(increment, (state) => ({
      ...state,
      value: state.value + 1,
    })),
    on(decrement, (state, action) => ({
      ...state,
      value: state.value - action.value,
    })),
    on(reset, (state) => ({ ...state, value: 0 })),
  ),
});

export const { selectValue } = counterFeature;
