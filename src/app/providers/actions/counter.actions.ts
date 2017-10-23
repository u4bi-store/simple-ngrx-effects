import { Action } from '@ngrx/store';

export const INCREMENT   = '[Counter] INCREMENT';
export const DECREMENT   = '[Counter] DECREMENT';
export const RESET       = '[Counter] RESET';
export const SIDE_EFFECT = '[Counter] SIDE_EFFECT';

export class Increment implements Action {
    readonly type = INCREMENT;
}

export class Decrement implements Action {
    readonly type = DECREMENT;
}

export class Reset implements Action {
    readonly type = RESET;

    constructor(public payload : number){ }

}

export class SideEffect implements Action {
    readonly type = SIDE_EFFECT;
}

export type All = Increment | Decrement | Reset;