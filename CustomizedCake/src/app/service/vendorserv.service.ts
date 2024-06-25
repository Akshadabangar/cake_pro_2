import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VendorservService {

  private vendorsurl='/assets/vendors.json';

  constructor(private http:HttpClient) { }

  getVendors():Observable<any>{
    return this.http.get<any>(this.vendorsurl);
  }



}
