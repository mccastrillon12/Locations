import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationsHomeComponent } from './pages/locations-home/locations-home.component';
import { SearchLocationComponent } from './pages/search-location/search-location.component';

const routes: Routes = [
  {
    path:'home',
    component:LocationsHomeComponent
  },
  {
    path:'search',
    component:SearchLocationComponent
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
