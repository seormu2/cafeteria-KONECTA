import { Component, createPlatform, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  form !: FormGroup;
  product: Product = {};
  @Input() set productInput(productInput: Product) {
    this.obtenerProductOutput(productInput);
  }
  @Input() set setForm(productInput: boolean) {
    this.setFieldsForm();
  }
  @Input() updateBoolean: boolean = false;

  constructor(private readonly formBuilder: FormBuilder,
    private service: ProductsService) { }

  ngOnInit(): void {
    this.createForm();
  }

  
  createForm(){
    this.form = this.formBuilder.group({
      nameProduct:['', [Validators.required]],
      referency:['', [Validators.required]],
      price:['', [Validators.required]],
      weight:['', [Validators.required]],
      stock:['', [Validators.required]],
      category:['', [Validators.required]],
    })
  }

  saveProduct(){
    this.product = {
      "nameProduct": this.form.value.nameProduct,
      "referency": this.form.value.referency,
      "price": this.form.value.price,
      "weight": this.form.value.weight,
      "stock": this.form.value.stock,
      "idCategory": this.form.value.category,
    };
    this.service.saveProduct(this.product).subscribe(resultado =>{
      
    })
  }

  editProduct(){
    this.product = {
      "id": this.product.id,
      "nameProduct": this.form.value.nameProduct,
      "referency": this.form.value.referency,
      "price": this.form.value.price,
      "weight": this.form.value.weight,
      "stock": this.form.value.stock,
      "idCategory": this.form.value.category,
    };
    console.log("PRODUCT ", this.product)
    this.service.editProduct(this.product).subscribe(
      result =>{
        console.log("error",result)
      }
    )
  }

  obtenerProductOutput(productInput: Product){
    this.product = productInput;    
  }

  setFieldsForm(){
    this.product = {
      "nameProduct": "",
      "referency": "",
      "price": 0,
      "weight": 0,
      "stock": 0,
      "idCategory": 0,
    };
    this.updateBoolean = false;
  }

}
