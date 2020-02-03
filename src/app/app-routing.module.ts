import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CartComponent} from './cart/cart.component';
import {HomeComponent} from './home/home.component';
import {CartChooserComponent} from './cart-chooser/cart-chooser.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cart', component: CartChooserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
