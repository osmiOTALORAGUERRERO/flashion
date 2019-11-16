import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {
MatButtonModule,
MatCardModule,
MatFormFieldModule,
MatGridListModule,
MatIconModule,
MatInputModule,
MatListModule,
MatMenuModule,
MatSnackBarModule,
MatToolbarModule,
MatDialogModule,
MatOptionModule,
MatProgressBarModule,
MatSelectModule,
MatSortModule,
MatTableModule,
MatTabsModule,
MatProgressSpinnerModule
} from '@angular/material';
import {
  FormsModule,
  ReactiveFormsModule,

} from '@angular/forms';
import { AppService } from '../common/app.service';
import { ProductsService } from '../common/products.service';
@NgModule({
imports: [
  CommonModule,
],
declarations : [],
exports: [
FormsModule,
ReactiveFormsModule,
MatButtonModule,
MatCardModule,
MatFormFieldModule,
MatGridListModule,
MatIconModule,
MatInputModule,
MatListModule,
MatMenuModule,
MatSnackBarModule,
MatToolbarModule,
MatDialogModule,
MatOptionModule,
MatProgressBarModule,
MatSelectModule,
MatSortModule,
MatTableModule,
MatTabsModule,
MatProgressSpinnerModule

],
providers: [AppService, ProductsService]

})
export class SharedModule {}