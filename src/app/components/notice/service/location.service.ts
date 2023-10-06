import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { ResponseApi } from '../model/response-api.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private urlApi = environment.baseURL;

  constructor(private http: HttpClient) {}

  public getLocations():Observable<ResponseApi[]> {
    return this.http.get(this.urlApi) as Observable<ResponseApi[]>;
  }
}
