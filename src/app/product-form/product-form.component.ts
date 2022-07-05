import { Component, createPlatform, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';
import { TableProductsComponent } from '../table-products/table-products.component';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  form !: FormGroup;
  product: Product = {};
  alert: string = '';
  validationAlert: boolean = false;
  categories = [{category: "Granos"}]
  @Input() set productInput(productInput: Product) {
    this.obtenerProductOutput(productInput);
  }
  @Input() set setForm(productInput: boolean) {
    this.setFieldsForm();
  }
  @Input() updateBoolean: boolean = false;

  validateButton: boolean = false;
  validateInitial: boolean = false;

  @ViewChild(TableProductsComponent, {static: false}) table: TableProductsComponent;

  constructor(private readonly formBuilder: FormBuilder,
    private service: ProductsService) { }

  ngOnInit(): void {
    this.createForm();
  }

  
  createForm(){
    this.form = this.formBuilder.group({
      nameProduct:['', [Validators.required, Validators.minLength(1)]],
      referency:['', [Validators.required, Validators.minLength(1)]],
      price:['', [Validators.required]],
      weight:['', [Validators.required]],
      stock:['', [Validators.required]],
      category:['', []],
    })
  }

  saveProduct(){
    if(this.validateFields()){
      const product = {
        "nameProduct": this.form.value.nameProduct,
        "referency": this.form.value.referency,
        "price": this.form.value.price,
        "weight": this.form.value.weight,
        "stock": this.form.value.stock,
        "idCategory": 1,
      };
      this.service.saveProduct(product).subscribe(resultado =>{
        this.validationAlert = false;
        this.product = {
          "nameProduct": "",
          "referency": "",
          "price": 0,
          "weight": 0,
          "stock": 0,
          "idCategory": 0,
        };
        window.location.reload();
      })
    }else{
      this.validationAlert = true;
      this.alert = 'Todos los campos son obligatorios';
    }
  }

  validateFields(){
    if(this.form.valid){
      return true;
    }
    return false;
  }

  editProduct(){
    if(this.validateFields()){
      this.product = {
        "id": this.product.id,
        "nameProduct": this.form.value.nameProduct,
        "referency": this.form.value.referency,
        "price": this.form.value.price,
        "weight": this.form.value.weight,
        "stock": this.form.value.stock,
        "idCategory": 1,
      };
      this.service.editProduct(this.product).subscribe(
        _ =>{
          this.validationAlert = false;
          this.product = {
            "nameProduct": "",
            "referency": "",
            "price": 0,
            "weight": 0,
            "stock": 0,
            "idCategory": 0,
          };
          this.validateButton = false;
        }
      )
    }else{
      this.validationAlert = true;
      this.alert = 'Todos los campos son obligatorios';
    }
  }

  obtenerProductOutput(productInput: Product){
    this.product = productInput;
    if(this.validateInitial){
      this.validateButton = true;
    }else{
      this.validateInitial = true;
    }
    
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

  cancel(){
    this.validateButton = false;
    this.setFieldsForm()
  }

}
