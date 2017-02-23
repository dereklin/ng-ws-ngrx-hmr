import { StudentService } from '../services/student.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/throttleTime';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';

import { GoogleBooksService } from '../services/google-books';
import * as student from '../actions/student';
import * as fromRoot from '../reducers';

/**
 * Effects offer a way to isolate and easily test side-effects within your
 * application. StateUpdates is an observable of the latest state and
 * dispatched action. The `toPayload` helper function returns just
 * the payload of the currently dispatched action, useful in
 * instances where the current state is not necessary.
 *
 * If you are unfamiliar with the operators being used in these examples, please
 * check out the sources below:
 *
 * Official Docs: http://reactivex.io/rxjs/manual/overview.html#categories-of-operators
 * RxJS 5 Operators By Example: https://gist.github.com/btroncone/d6cf141d6f2c00dc6b35
 */

@Injectable()
export class StudentEffects {
  @Effect()
  private load$: Observable<Action> = this.actions$
    .ofType(student.ActionTypes.LOAD_STUDENTS)
    .debounceTime(5000)
    .delay(5000)
    .withLatestFrom(this.store, (action, state) => state.student.loading)
    .filter((x) => x)
    .switchMap(() => {
      return this.studentService.getStudents();
    })
    .map((students: any[]) => {
      return new student.LoadStudentAction(students);
    });

  constructor(private actions$: Actions,
              private store: Store<fromRoot.State>, private studentService: StudentService) { }
}
