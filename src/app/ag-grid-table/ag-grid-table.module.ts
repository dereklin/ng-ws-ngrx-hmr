import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { AgGridTableComponent } from './ag-grid-table.component';
import { AgGridModule } from 'ag-grid-ng2/main';

@NgModule({
    imports: [
      AgGridModule.withComponents(
        [
        ]
      ),
      BrowserModule,
      FormsModule
    ],
    declarations: [
        AgGridTableComponent,
    ],
    exports: [
        AgGridTableComponent,
    ]
})
export class AgGridTableModule {

}
