import { Component, HostListener, OnInit } from '@angular/core';
import { LocationModel } from './model/location.model';
import { LocationService } from './service/location.service';
import { ResponseApi } from './model/response-api.model';
import { MatDialog } from '@angular/material/dialog';
import { InformationModalComponent } from '../information-modal/information-modal.component';
import { SharedLocationService } from 'src/app/shared/service/shared-location.service';
import { IMAGES_LIBRARY } from 'src/app/shared/images-libary/images-library';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.sass'],
})
export class NoticeComponent implements OnInit {
  badgevisible = false;
  locations: LocationModel[] = [];
  location: LocationModel;
  isSmallScreen = window.innerWidth < 769;

  constructor(
    private locationService: LocationService,
    private dialog: MatDialog,
    private sharedLocationService: SharedLocationService
  ) {
    this.onResize();
  }

  ngOnInit(): void {
    this.getLocations();
  }

  getLocations() {
    this.locationService.getLocations().subscribe((data) => {
      this.saveLocation(data);
      this.getImages(this.locations)
    });

  }

  private saveLocation(data: ResponseApi[]) {
    var location;
    data.forEach((data) => {
      location = {
        address: data.address,
        lat: data.lat,
        long: data.long,
        serviceName: data.service_name,
        descriptionLegend: data.typology.description_legend,
        typologyDescription: data.typology.typology_description,
        image: '',
      };
      this.locations.push(location);
    });
  }

  private getImages(locations: LocationModel[]) {
    for (let i = 0; i <= locations.length; i++) {
      locations[i].image = IMAGES_LIBRARY[i];
    }
  }

  badgevisibility() {
    this.badgevisible = true;
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.isSmallScreen = window.innerWidth < 769;
  }

  openDialog(location: LocationModel) {
    this.dialog.open(InformationModalComponent, {
      data: location,
    });
  }

  setLocation(locationObject: LocationModel) {
    this.sharedLocationService.sendLocation(locationObject);
  }
}
