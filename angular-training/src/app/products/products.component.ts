import { Component } from '@angular/core';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  constructor(private breadcrumbService: BreadcrumbService,) { }

  ngOnInit(): void {
    this.breadcrumbService.set('@Products', 'Products');
  }

}