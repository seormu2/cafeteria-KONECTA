import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TableProductsComponent } from './table-products/table-products.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductFormComponent } from './product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';
import { SalesComponent } from './sales/sales.component';
import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path: '', component: SalesComponent},
  {path: 'sales', component: SalesComponent},
  {path: 'products', component: AppComponent},
  
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TableProductsComponent,
    ProductFormComponent,
    AlertComponent,
    SalesComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
