import { EventEmitter, Injectable, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { LocationModel } from 'src/app/components/notice/model/location.model';

@Injectable({
  providedIn: 'root',
})
export class SharedLocationService {
  location: LocationModel;

  sendLocationSubject = new Subject<LocationModel>();

  sendLocationObservable =this.sendLocationSubject.asObservable();

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

  sendLocation(locationSended: LocationModel){
    this.location = locationSended;
    this.sendLocationSubject.next(locationSended)
  }
}
