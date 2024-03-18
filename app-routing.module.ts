import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './list/list.component';
import { FeedbackComponent } from './feedback/feedback.component';

const routes: Routes = [
  { 
    path: 'data', 
    component: ListComponent,
  } ,
  { 
    path: 'feed', 
    component: FeedbackComponent,
  } 
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
