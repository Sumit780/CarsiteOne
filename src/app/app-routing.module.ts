import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardInfoInDetailComponent } from './card-info-in-detail/card-info-in-detail.component';
import { PannelsComponent } from './pannels/pannels.component';


const routes: Routes = [
  {
    path:"cardInfo",
    component:CardInfoInDetailComponent
  },
  {
    path:"pannels",
    component:PannelsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
