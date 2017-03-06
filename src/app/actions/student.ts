import { type } from '../util';
import { Action } from '@ngrx/store';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 *
 * The 'type' utility function coerces strings into string
 * literal types and runs a simple check to guarantee all
 * action types in the application are unique.
 */

export class ActionTypes {
  public static readonly LOAD_STUDENTS =       type('[Student] Load');
  public static readonly STOP_LOADING =       type('[Student] Stop Loading');
};

export class LoadStudentAction implements Action {
  public readonly type = ActionTypes.LOAD_STUDENTS;
  constructor(public payload: any[]) { }
}

export class StopLoadingAction implements Action {
  public readonly type = ActionTypes.STOP_LOADING;
}

export type Actions
  = LoadStudentAction | StopLoadingAction;
