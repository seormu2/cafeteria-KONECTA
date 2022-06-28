import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product, SaveProduct } from '../interfaces/product';
import { ProductsService } from '../services/products.service';
//import { Product } from '../interfaces/ProductInterface';

@Component({
  selector: 'app-table-products',
  templateUrl: './table-products.component.html',
  styleUrls: ['./table-products.component.css']
})
export class TableProductsComponent implements OnInit {

  listProducts: Product[] = [];
  product: Product = {};
  @Output() productOutput  = new EventEmitter<Product>;
  @Output() setForm  = new EventEmitter<any>;
  @Output() validateAction = new EventEmitter<any>;

  constructor(private serice: ProductsService) { }

  ngOnInit(): void {
    this.listProductsAll();
  }

  showModal(item: Product){
    this.product = item;
  }

  deleteProduct(){
    this.serice.deleteProduct(this.product.id).subscribe( response =>{
      this.listProductsAll();
      this.setFieldsForm();
  });
  }

  listProductsAll(){
    this.serice.listProducts().subscribe(products => {
      this.listProducts = products
    }
    )
  }

  editProduct(item: Product){
    this.productOutput.emit(item);
    this.validateAction.emit();
  }

  setFieldsForm(){
    this.setForm.emit();
  }
}
