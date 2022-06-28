import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sales } from '../interfaces/sales';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  private urlCreateSale = 'http://127.0.0.1:8000/api/create/sale';
  constructor(private http: HttpClient) { }

  public saveSale(sale: Sales){
    return this.http.post(this.urlCreateSale,sale);
  }
}
