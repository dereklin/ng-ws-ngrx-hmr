import { Action } from '@ngrx/store';


export const LOAD_STUDENTS =  '[Student] Load';

export class  LoadStudentAction implements Action {
  readonly type = LOAD_STUDENTS;
  constructor(public payload: any[]) { }
}

export type Actions
  = LoadStudentAction;