
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterProductComponent } from './components/register-product/register-product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "dashboard", component: DashboardComponent},
  {path: "register-product", component: RegisterProductComponent},
  {path: "product-details", component: ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
