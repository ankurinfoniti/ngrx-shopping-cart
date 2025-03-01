import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter] increment');
export const decrement = createAction(
  '[Counter] decrement',
  props<{ value: number }>(),
);
export const reset = createAction('[Counter] reset');
