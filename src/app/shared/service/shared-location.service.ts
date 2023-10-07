import { EventEmitter, Injectable, Output } from '@angular/core';
import { LocationModel } from 'src/app/components/notice/model/location.model';

@Injectable({
  providedIn: 'root',
})
export class SharedLocationService {
  location: LocationModel;

  @Output()
  locationEmiter: EventEmitter<LocationModel> = new EventEmitter<LocationModel>();

  constructor() {
    this.location = {
      address: '',
      lat: 41.403706,
      long: 2.173504,
      descriptionLegend: '',
      serviceName: '',
      typologyDescription: '',
    };
  }

  setLocation(newLocation: LocationModel) {
    this.location = newLocation;
    this.emitLocation();
  }

  emitLocation() {
    console.log(this.location)
    this.locationEmiter.emit(this.location);
  }
}
