import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationsHomeComponent } from './pages/locations-home/locations-home.component';

import { NewLocationComponent } from './pages/new-location/new-location.component';

const routes: Routes = [
  {
    path:'home',
    component:LocationsHomeComponent
  },
  {
    path:'search',
    component:NewLocationComponent
  },

  {
    path:'',
    component:LocationsHomeComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
