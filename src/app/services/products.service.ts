import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { editSuccess, Product, SaveProduct } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private  urlListProducts = 'http://127.0.0.1:8000/api/products';
  private urlSaveProduct = 'http://127.0.0.1:8000/api/create';
  private urlDeleteProduct = 'http://127.0.0.1:8000/api/delete/';
  private urlUpdateProduct = 'http://127.0.0.1:8000/api/update/';

  constructor(private http: HttpClient) { }

  public listProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.urlListProducts);
  }

  public saveProduct(product: Product){
    console.log('service',product)
    return this.http.post(this.urlSaveProduct,product);
  }

  public deleteProduct(item: any): Observable<SaveProduct>{
    return this.http.delete<SaveProduct>(this.urlDeleteProduct+item)
  }

  public editProduct(item: Product): Observable<editSuccess>{
    console.log("item", item.nameProduct)
    return this.http.put<editSuccess>(this.urlUpdateProduct+item.id, item);
  }
}
