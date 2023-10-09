import { Component } from '@angular/core';
import { LocationModel } from 'src/app/components/notice/model/location.model';
import { SharedLocationService } from 'src/app/shared/service/shared-location.service';

@Component({
  selector: 'app-search-location',
  templateUrl: './search-location.component.html',
  styleUrls: ['./search-location.component.sass'],
})
export class SearchLocationComponent {
  latitud: number;
  longitud: number;
  location: LocationModel;
  inputVisible = true;
  constructor(private sharedLocationService: SharedLocationService) {}

  setLocation() {
    const locationObject: LocationModel = {
      address: '',
      serviceName: '',
      lat: this.latitud,
      long: this.longitud,
      descriptionLegend: '',
      typologyDescription: '',
    };

    this.sharedLocationService.sendLocation(locationObject);
    this.inputVisible = false;
  }



  mostrarCamposDeEntrada() {
    this.inputVisible = true;
  }

}
