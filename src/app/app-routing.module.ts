import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from "@angular/router";

const routes: Routes = [
  {path: '', component: MainLayout}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  export: [
    RouterModule
  ]
})
export class AppRoutingModule { }
