import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { CounterState } from './providers/state/counter-state';
import * as CounterActions from './providers/actions/counter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    public counter : Observable<any>;
    
    constructor(private store: Store<CounterState>) {
        this.counter = store.select(e => e.counter);
    }

    increment = () => this.store.dispatch(new CounterActions.Increment());
    decrement = () => this.store.dispatch(new CounterActions.Decrement());
    reset = () => this.store.dispatch(new CounterActions.Reset(0));

    sideEffect = () => this.store.dispatch(new CounterActions.SideEffect());

}