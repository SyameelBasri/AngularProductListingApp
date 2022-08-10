import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { BreadcrumbModule } from "xng-breadcrumb";

@NgModule({
	declarations: [
		SidebarComponent,
	],
	imports: [
		CommonModule,
		RouterModule,
	],
	exports: [
		SidebarComponent,
		CommonModule,
		BreadcrumbModule,
		RouterModule,
	]
})
export class SharedModule{}