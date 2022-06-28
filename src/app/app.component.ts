import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from './interfaces/product';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cafeteria-KONECTA';

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
    console.log("VALOR ",this.setFormBoolean)
  }
  

  
}
