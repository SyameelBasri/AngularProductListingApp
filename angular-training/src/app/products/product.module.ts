import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductRoutingModule } from "./product-routing.module";
import { ProductsComponent } from "./products.component";
import { MatTableModule } from "@angular/material/table"
import { MatSortModule } from '@angular/material/sort';
import { RouterModule } from "@angular/router";
import { ProductListComponent } from "./product-list/product-list.component";

@NgModule({
	declarations: [
		ProductsComponent,
		ProductListComponent,
		ProductDetailsComponent
	],
	imports: [
		RouterModule,
		SharedModule,
		ProductRoutingModule,
		MatTableModule,
		MatSortModule,
	]
})
export class ProductModule{}