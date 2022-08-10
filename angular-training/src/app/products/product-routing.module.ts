import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductsComponent } from "./products.component";

const routes: Routes = [
	{ path: '', component: ProductsComponent, children:[
		{ path:'', component: ProductListComponent, data: {breadcrumb: {alias: 'Products'}}},
		{ path:':id', component: ProductDetailsComponent, data: {breadcrumb: {alias: 'ProductDetails'}}},
	]},
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ProductRoutingModule{}