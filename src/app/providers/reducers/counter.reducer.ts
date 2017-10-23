import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as CounterActions from '../actions/counter.actions';
import { CounterState } from '../state/counter-state';

export function counterReducer(state : number = 0 , action: CounterActions.All) {

	switch (action.type) {
		case CounterActions.INCREMENT 	: return state + 1;
		case CounterActions.DECREMENT 	: return state - 1;
		case CounterActions.RESET 		: return action.payload;
		default : return state;
	}
	
}