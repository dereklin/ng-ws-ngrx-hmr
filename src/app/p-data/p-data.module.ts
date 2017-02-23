import { PrimengDataTableModule } from '../primeng-data-table';
import { CommonModule } from '@angular/common';
// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { PDataComponent } from './p-data.component';

@NgModule({
    imports: [
        CommonModule,
        PrimengDataTableModule
    ],
    declarations: [
        PDataComponent,
    ],
    exports: [
        PDataComponent,
    ]
})
export class PDataModule {

}
