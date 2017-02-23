import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'primeng-data-table',
    templateUrl: 'primeng-data-table.component.html',
    styleUrls: ['primeng-data-table.component.scss']
})
export class PrimengDataTableComponent {
  @Input() public tableData: any[];
  @Input() public cols: any[];

  public displayData(store, key) {
    let myKeys = key.split('.');
    let value: any = store;
    myKeys.forEach((k) => {
      value = value[k];
    });
    return value;
  }

}
