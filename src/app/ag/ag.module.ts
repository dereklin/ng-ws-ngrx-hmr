import { AgGridTableModule } from '../ag-grid-table';
import { CommonModule } from '@angular/common';
// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { AgComponent } from './ag.component';

@NgModule({
    imports: [
      CommonModule,
      AgGridTableModule
    ],
    declarations: [
        AgComponent,
    ],
    exports: [
        AgComponent,
    ]
})
export class AgModule {

}
