import { Component, Input } from '@angular/core';
import { GridOptions } from 'ag-grid/main';

@Component({
    selector: 'ag-grid-table',
    templateUrl: 'ag-grid-table.component.html',
    styleUrls: ['ag-grid-table.component.scss']
})
export class AgGridTableComponent {
  @Input() public gridOptions: GridOptions;
  @Input() public rowData: any[];
}
