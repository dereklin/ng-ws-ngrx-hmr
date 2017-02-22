import { type } from '../util';
import { Action } from '@ngrx/store';
import { State as AppState } from '../reducers';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 * 
 * The 'type' utility function coerces strings into string
 * literal types and runs a simple check to guarantee all
 * action types in the application are unique.
 */

export class ActionTypes {
  public static readonly SET_ROOT_STATE =       type('[AppState] Set Root State');
};


export class SetRootStateAction implements Action {
  public readonly type = ActionTypes.SET_ROOT_STATE;
  constructor(public payload: AppState) { }
}

export type Actions
  = SetRootStateAction;
