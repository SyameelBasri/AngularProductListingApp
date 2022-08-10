import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';
import { TokenStorageService } from '../../_services/token-storage.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  isLoggedIn = false;
  passwordChanged = false;
  form: any = {};

  constructor(private tokenStorageService: TokenStorageService, private router: Router, private breadcrumbService: BreadcrumbService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (!this.isLoggedIn){
      this.router.navigate(['/unauthorized']);
    } else {
      this.breadcrumbService.set('@ChangePassword', 'Change Password');
    }
  }

  onSubmit(){
    this.passwordChanged = true;
  }

}
