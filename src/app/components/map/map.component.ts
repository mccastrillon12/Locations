import { Component, OnInit, AfterViewInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import * as Proj from 'ol/proj';
import { defaults as defaultControls } from 'ol/control';
import { LocationModel } from '../notice/model/location.model';
import { SharedLocationService } from 'src/app/shared/service/shared-location.service';
import TileImage from 'ol/source/TileImage';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import { Overlay } from 'ol';
import { toStringHDMS } from 'ol/coordinate';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass'],
})
export class MapComponent implements OnInit, AfterViewInit {
  location: LocationModel;
  map: Map;
  data: LocationModel[] = [];
  private mapElementId = 'map';
  private mapView: View;
  private mapLayer: TileLayer<TileImage>;
  private markerLayer: VectorLayer<VectorSource>;
  private currentMarker: Feature;

  constructor(private sharedLocationService: SharedLocationService) {
    this.location = this.sharedLocationService.location;
  }

  ngOnInit(): void {
    this.sharedLocationService.sendLocationObservable.subscribe((data) => {
      this.location = data;
      this.updateMap();
    });
  }

  ngAfterViewInit(): void {
    this.createMap();
  }

  private createMap(): void {
    const container = document.getElementById('popup');
    const content = document.getElementById('popup-content');
    const closer = document.getElementById('popup-closer');

    const overlay = new Overlay({
      element: container,
      autoPan: true,
    });

    this.mapLayer = new TileLayer({
      source: new XYZ({
        url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      }),
    });

    this.mapView = new View({
      center: Proj.fromLonLat([this.location.long, this.location.lat]),
      zoom: 16,
    });

    this.map = new Map({
      target: this.mapElementId,
      layers: [this.mapLayer],
      overlays: [overlay],
      view: this.mapView,
      controls: defaultControls().extend([]),
    });

    this.map.on('singleclick', function (evt: any) {
      const coordinate = evt.coordinate;
      const hdms = toStringHDMS(Proj.toLonLat(coordinate));

      content.innerHTML =
        '<p>Current coordinates are :</p><code>' + hdms + '</code>';
      overlay.setPosition(coordinate);
    });

    closer.onclick = function () {
      overlay.setPosition(undefined);
      closer.blur();
      return false;
    };

    this.setMarker();
  }

  private setMarker() {
    if (this.currentMarker) {
      this.markerLayer.getSource().removeFeature(this.currentMarker);
    }

    this.currentMarker = new Feature({
      geometry: new Point(
        Proj.fromLonLat([this.location.long, this.location.lat])
      ),
    });

    const markerStyle = new Style({
      image: new Icon({
        src: '../../../assets/map.png',
        scale: 0.05,
      }),
    });

    this.currentMarker.setStyle(markerStyle);

    this.markerLayer = new VectorLayer({
      source: new VectorSource({
        features: [this.currentMarker],
      }),
    });

    this.map.addLayer(this.markerLayer);
  }

  private updateMap(): void {
    if (this.map && this.mapView && this.mapLayer) {
      this.mapView.setCenter(
        Proj.fromLonLat([this.location.long, this.location.lat])
      );

      this.setMarker();
    }
  }
}
