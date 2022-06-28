import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  productInput: Product = {};
  setFormBoolean: boolean = true;
  validateAction: boolean = false;


  obtenerProductOutput(product: Product){
    this.productInput = product
    this.validateAction = true;
  }
  setForm(){
    if(this.setFormBoolean){
      this.setFormBoolean = false;
    }else{
      this.setFormBoolean = true;
    }
    this.validateAction = false
  }

}
