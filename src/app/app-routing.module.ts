import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';
const routes: Routes = [
  { path: "home", component: HomeComponent, title: "Home - Indra's Robot Shop" },
  { path: "catalog", component: CatalogComponent, title: "Catalog - Indra's Robot Shop" },
  { path: "cart", component: CartComponent, title: "Cart - Indra's Robot Shop" },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
