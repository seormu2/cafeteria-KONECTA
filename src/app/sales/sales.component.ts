import { Component, OnInit } from '@angular/core';
import { ChildActivationStart } from '@angular/router';
import { Product } from '../interfaces/product';
import { Sales } from '../interfaces/sales';
import { ProductsService } from '../services/products.service';
import { SalesService } from '../services/sales.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  listProducts: Product[] = [];
  total: number = 0;
  alert: string = '';
  validationAlert: boolean = false;
  constructor(private readonly service: ProductsService,
    private readonly salesService: SalesService) { }

  ngOnInit(): void {
    this.listProductsAll();
  }

  listProductsAll(){
    this.service.listProducts().subscribe(response => {
      this.listProducts = response;
    })
  }

  deleteProduct(item: Product){
    this.validationAlert = false;
    if((item.total || 0)>1){
      item.total = (item.total || 0) - 1;
    }
    item.totalPrice = ((item.price || 0) * (item.total || 0))

  }

  addProduct(item: Product){
    this.validationAlert = false;
    const stock = item.stock || 0;
    const total = item.total || 0
    if(total < stock){
      item.total = (item.total || 0) + 1;
    }
    item.totalPrice = ((item.price || 0) * (item.total || 0))
    if(item.stock==0){
      this.alert = 'No hay productos en stock '+ item.nameProduct
      this.validationAlert = true;
    }
  }

  buyProduct(item: Product){
    if((item.total || 0)>0){
      const request: Sales= {
        "amount": item.totalPrice,
        "total": item.total,
        "idProduct": item.id,
        "stock": item.stock
      }
      this.salesService.saveSale(request).subscribe(response => {
        this.updateStock(request);
      })
    }else{
      this.alert = 'No hay productos seleccionados.'
      this.validationAlert = true;
    }
  }

  updateStock(request: Sales){
    const id = request.idProduct || 0;
    const stock = (request.stock || 0) - (request.total || 0);

    const update = {
      "stock":stock
    }
    this.service.updateStock(id, stock,update).subscribe(_ => {
      this.listProductsAll()
    })
  }

}
