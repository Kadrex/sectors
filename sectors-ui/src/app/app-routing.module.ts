import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {SectorsFormViewComponent} from "./components/sectors-form-view/sectors-form-view.component";
import {AdminViewComponent} from "./components/admin-view/admin-view.component";

const routes: Routes = [
  { path: '', component: SectorsFormViewComponent},
  { path: 'admin', component: AdminViewComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
