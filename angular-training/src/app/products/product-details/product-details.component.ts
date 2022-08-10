import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { BreadcrumbService } from 'xng-breadcrumb';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  isLoggedIn = false;
  id: number;
  product: any;

  constructor(
    private tokenStorageService: TokenStorageService, 
    private router: Router,
    private route: ActivatedRoute, private userService: UserService, 
    private breadcrumbService: BreadcrumbService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (!this.isLoggedIn){
      this.router.navigate(['/unauthorized']);
    } else {
      this.route.params.subscribe(params => {
        this.id = +params['id']; 
      });
      this.product = this.userService.getProduct(this.id);
      this.breadcrumbService.set('@ProductDetails', this.product.name);
    }
  }
}
