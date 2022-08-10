import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { UserService } from '../../_services/user.service';
import { TokenStorageService } from '../../_services/token-storage.service';

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
  	styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
	isLoggedIn = false;
	products: any;
	prices: number[] = [];
	highestPrice: number;
	lowestPrice: number;
	priceRange: string;
	@ViewChild(MatSort) sort: MatSort;
  
	constructor(private router: Router, private userService: UserService, private tokenStorageService: TokenStorageService){}
  
	ngOnInit() {
	  this.isLoggedIn = !!this.tokenStorageService.getToken();
	  if (!this.isLoggedIn){
		this.router.navigate(['/unauthorized']);
	  } 
	  
	  this.products = this.userService.getProducts();
	}

	getPriceRange(product: any){
		for (const variance of product.variance) {
			this.prices.push(variance.price);
		}
		this.highestPrice = Math.max(...this.prices);
		this.lowestPrice = Math.min(...this.prices);
		this.prices = [];
		return this.numberWithCommas(this.lowestPrice) + " - " + this.numberWithCommas(this.highestPrice);
	}

	numberWithCommas(num: number) {
		var parts = num.toString().split(".");
		parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		return parts.join(".");
	}

	productDetails(id: number){
	  this.router.navigate(['products', id]);
	}
}