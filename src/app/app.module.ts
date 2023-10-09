import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { NgFor, DatePipe } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { NoticeComponent } from './components/notice/notice.component';
import { MapComponent } from './components/map/map.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { InformationModalComponent } from './components/information-modal/information-modal.component';
import { LocationsHomeComponent } from './pages/locations-home/locations-home.component';
import { SearchLocationComponent } from './pages/search-location/search-location.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NoticeComponent,
    MapComponent,
    InformationModalComponent,
    LocationsHomeComponent,
    SearchLocationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    NgFor,
    MatIconModule,
    MatDividerModule,
    DatePipe,
    MatMenuModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatBadgeModule,
    MatCardModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatMenuModule,
    MatInputModule
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
