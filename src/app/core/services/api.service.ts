import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlBase = `https://mindicador.cl/api/`;

  constructor(private http: HttpClient) {}

  getData(paramsIndicator?: string, paramsDate?: string): Observable<any> {
    const url = this.routeBuilder(paramsIndicator, paramsDate);
    return this.http.get(url);
  }
  
  private routeBuilder(routeOne?: string, routeTwo?: string) {
    routeOne = (routeOne) ? routeOne + '/' : '';
    routeTwo = (routeTwo) ? routeTwo + '/' : '';
    return `${this.urlBase}${routeOne}${routeTwo}`;
  }
}
