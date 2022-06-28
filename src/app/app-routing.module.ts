import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SalesComponent } from './sales/sales.component'
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  {path: '', component: ProductComponent},
  {path: 'products', component: ProductComponent},
  {path: 'sales', component: SalesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
