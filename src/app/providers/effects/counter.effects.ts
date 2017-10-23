import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import * as CounterActions from '../actions/counter.actions';
import 'rxjs/add/operator/mapTo';

@Injectable()
export class CounterEffects {
  
  constructor(private actions$: Actions) {}

  @Effect()
  request$ = this.actions$
      .ofType(CounterActions.SIDE_EFFECT)
      .mapTo(new CounterActions.Increment());

}