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

export const DEFAULT_HEIGHT = '500px';
export const DEFAULT_WIDTH = '500px';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass'],
})
export class MapComponent implements OnInit, AfterViewInit {
  @Input() lat: number;
  @Input() lon: number;
  @Input() zoom: number;
  @Input() width: string | number = DEFAULT_WIDTH;
  @Input() height: string | number = DEFAULT_HEIGHT;

  map: Map;
  private mapEl: HTMLElement;
  data: any[] = [];
  constructor(private elementRef: ElementRef,) {}
  ngOnInit(): void {
    this.mapEl = this.elementRef.nativeElement.querySelector('#map');
    this.setSize();

  }


  ngAfterViewInit(): void {
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
        center: Proj.fromLonLat([this.lon, this.lat]),
        zoom: this.zoom,
      }),
      controls: defaultControls().extend([]),
    });
  }

  private setSize(): void {
    if (this.mapEl) {
      const styles = this.mapEl.style;
      styles.height = coerceCssPixelValue(this.height) || DEFAULT_HEIGHT;
      styles.height = coerceCssPixelValue(this.width) || DEFAULT_WIDTH;
    }
  }
}

const cssUnitsPattern = /([A-Za-z%]+)$/;

function coerceCssPixelValue(value: any): string {
  if (value == null) {
    return '';
  }
  return cssUnitsPattern.test(value) ? value : `${value}px`;
}
