import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OmgComponent } from './omg/omg.component';
import { FacebookComponent } from './facebook/facebook.component';

const routes: Routes = [
  {path:'',component:OmgComponent,pathMatch:"full"},
  {path:'facebook/login',component:FacebookComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
