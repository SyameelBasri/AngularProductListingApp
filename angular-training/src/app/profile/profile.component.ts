import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent{

  constructor(private breadcrumbService: BreadcrumbService,) { }

  ngOnInit(): void {
    this.breadcrumbService.set('@Profile', 'Profile');
  }

}