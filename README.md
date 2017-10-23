### app.module.ts
```ts
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { counterReducer } from './providers/reducers/counter.reducer';
import { CounterEffects } from './providers/effects/counter.effects';

@NgModule({
  ...
  imports: [
    ...
    StoreModule.forRoot({
      counter : counterReducer
    }),
    EffectsModule.forRoot([
      CounterEffects
    ])
    ...
  ]
  ...
})
export class AppModule { }
```

### counter.actions.ts
```ts
export const SIDE_EFFECT = '[Counter] SIDE_EFFECT';

export class SideEffect implements Action {
    readonly type = SIDE_EFFECT;
}
```

### counter.effects.ts
```ts
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
```

### app.component.ts
```ts
  sideEffect = () => this.store.dispatch(new CounterActions.SideEffect());
```