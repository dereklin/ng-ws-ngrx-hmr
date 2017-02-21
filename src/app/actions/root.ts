import { Action } from '@ngrx/store';


export const SET_ROOT_STATE =  '[Root] Set Root State';

export class  SetRootStateAction implements Action {
  readonly type = SET_ROOT_STATE;
  constructor(public payload: any) { }
}

export type Actions
  = SetRootStateAction;