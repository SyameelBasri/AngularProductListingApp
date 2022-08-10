import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { TokenStorageService } from "src/app/_services/token-storage.service";

@Component({
	selector: 'app-profile-info',
	templateUrl: './profile-info.component.html',
	styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit{
	isLoggedIn = false;
	currentUser: any;
  
	constructor(private tokenStorageService: TokenStorageService, private router: Router, private route: ActivatedRoute) { }
  
	ngOnInit(): void {
	  this.isLoggedIn = !!this.tokenStorageService.getToken();
	  if (this.isLoggedIn){
		this.currentUser = this.tokenStorageService.getUser();
	  } else {
		this.router.navigate(['unauthorized']);
	  }
	}
  
	goToChangePassword(){
	  this.router.navigate(['changepassword'], {relativeTo: this.route});
	}
}