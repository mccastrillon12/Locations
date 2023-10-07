import {
  Component,
  OnInit,
  AfterViewInit,
  Input,
  ElementRef,
} from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import * as Proj from 'ol/proj'; // con esto podemos utilizar latitud y altitud
import { defaults as defaultControls } from 'ol/control'; //zoom, flechas de movimiento
import { LocationModel } from '../notice/model/location.model';
import { SharedLocationService } from 'src/app/shared/service/shared-location.service';

export const DEFAULT_HEIGHT = '500px';
export const DEFAULT_WIDTH = '500px';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass'],
})
export class MapComponent implements OnInit, AfterViewInit {
  location:LocationModel
  map: Map;
  private mapEl: HTMLElement;
  data: any[] = [];

  constructor(private elementRef: ElementRef, private sharedLocationService: SharedLocationService) {
    this.location = this.sharedLocationService.location
  }

  ngOnInit(): void {
    this.sharedLocationService.locationEmiter.subscribe(
      data => {
        console.log(data)
        this.location = data;
        this.test()
      }
    )

    this.mapEl = this.elementRef.nativeElement.querySelector('#map');

  }

  test(){
    console.log(this.location)
    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          }),
        }),
      ],
      view: new View({
        center: Proj.fromLonLat([this.location.long, this.location.lat]),
        zoom: 16,
      }),
      controls: defaultControls().extend([]),
    });
  }

  ngAfterViewInit(): void {
    console.log(this.location)
    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          }),
        }),
      ],
      view: new View({
        center: Proj.fromLonLat([this.location.long, this.location.lat]),
        zoom: 16,
      }),
      controls: defaultControls().extend([]),
    });
  }
}

