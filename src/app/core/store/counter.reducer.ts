import { createReducer } from '@ngrx/store';

const initialState = { value: 0 };

export const counterReducer = createReducer(initialState);
