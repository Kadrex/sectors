import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SectorsFormViewComponent } from './components/sectors-form-view/sectors-form-view.component';
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MultiSelectMultiLevelOptionsComponent } from './components/multi-select-multi-level-options/multi-select-multi-level-options.component';
import { AdminViewComponent } from './components/admin-view/admin-view.component';
import { SectorEditDialogComponent } from './components/sector-edit-dialog/sector-edit-dialog.component';
import { SectorDeletionConfirmationDialogComponent } from './components/sector-deletion-confirmation-dialog/sector-deletion-confirmation-dialog.component';
import {MaterialModule} from './material';

@NgModule({
  declarations: [
    AppComponent,
    SectorsFormViewComponent,
    MultiSelectMultiLevelOptionsComponent,
    AdminViewComponent,
    SectorEditDialogComponent,
    SectorDeletionConfirmationDialogComponent
  ],
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule,
      ReactiveFormsModule,
      MaterialModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
