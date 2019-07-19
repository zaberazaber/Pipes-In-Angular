
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PipeComponent } from './pipe/pipe.component';
import { HomeComponent } from './home/home.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'PAW', component: PipeComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}