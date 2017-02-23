import { StudentService } from '../services/student.service';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs/Rx';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import * as fromRoot from '../reducers';
import * as student from '../actions/student';

@Component({
    selector: 'p-data',
    templateUrl: 'p-data.component.html',
    styleUrls: ['p-data.component.scss']
})
export class PDataComponent implements OnInit, OnDestroy {
  public studentTableData$: Observable<any[]>;
  public studentTableCols: any[];
  private getStudentDataSub: Subscription;
  constructor(private store: Store<fromRoot.State>,
              private cdRef: ChangeDetectorRef,
              private studentService: StudentService) {
    this.studentTableCols = [
        {field: 'name', headerName: 'Name'},
        {field: 'account', headerName: 'Account'},
        {field: 'street', headerName: 'Street'},
        {field: 'city', headerName: 'City'},
        {field: 'state', headerName: 'State'},
        {field: 'email', headerName: 'Email'}
    ];
    this.studentTableData$ = this.store.select(fromRoot.getStudents);
  }

  public ngOnInit() {
    this.getStudentDataSub = this.studentService.getStudents().subscribe((res) => {
      this.store.dispatch(new student.LoadStudentAction(res));
    });
  }

  public ngOnDestroy() {
    this.getStudentDataSub.unsubscribe();
    this.store.dispatch(new student.StopLoadingAction());
  }

}
