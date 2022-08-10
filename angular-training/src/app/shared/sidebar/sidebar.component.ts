import { Component } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent{

  constructor(private router: Router, private route: ActivatedRoute) {}

  goToChangePassword(){
    this.router.navigate(['/profile/changepassword']);
  }
  
}